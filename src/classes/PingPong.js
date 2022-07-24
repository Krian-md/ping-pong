'use strict';

import Board from '@/classes/Board';
import Player from '@/classes/Player';
import Factory from '@/classes/abstract-factories/Factory';
import AccelerateFactory from '@/classes/abstract-factories/AccelerateFactory';

import appStates from '@/enums/appStates';
import optionsStates from '@/enums/optionsStates';
import movementStates from '@/enums/movementStates';
import notifyStates from '@/enums/notifyStates';
import usersStates from '@/enums/usersStates';

export default class PingPong {
  constructor(canvasSelector, boardSelector, notify) {
    this.canvasSelector = canvasSelector;
    this.board = new Board(boardSelector, canvasSelector);
    this.notify = notify;
    this.ball = null;
    this.players = [];
    this.factory = new Factory();
    this.idAnimationFrame = 0;
    this.isPlaying = false;
  }

  run() {
    this._initialization();
    this._addListeners();
  }

  setFactory(factory) {
    if (factory === optionsStates.ACCELERATION) {
      this.factory = new AccelerateFactory();
    } else {
      this.factory = new Factory();
    }
  }

  _move() {
    const $canvas = this._getCanvas();

    const isCollisionLeftRocket = this.players[0]
      .getRocket()
      .isCollisionBall(this.ball, movementStates.LEFT);

    const isCollisionRightRocket = this.players[1]
      .getRocket()
      .isCollisionBall(this.ball, movementStates.RIGHT);

    if (isCollisionLeftRocket || isCollisionRightRocket) {
      this.ball.changeMovementDeltaX();
    }

    if (this.board.isCollisionBall(this.ball)) {
      this.ball.changeMovementDeltaY();
    }

    this.players.forEach((player) => {
      player.getRocket().reload();
    });
    this.ball.reload();

    const isGoal =
      this.ball.getPositionX() - this.ball.getRadius() < $canvas.width &&
      this.ball.getPositionX() + this.ball.getRadius() > 0;

    if (!isGoal) {
      this._scoredPlayer();
    } else {
      this.idRequestAnimationFrame = this._animation(this._move.bind(this));
    }
  }

  _scoredPlayer() {
    const $canvas = this._getCanvas();
    this._cancelAnimation();

    let player = null;

    if (this.ball.getPositionX() >= $canvas.width) {
      player = this.players[0];
    } else if (this.ball.getPositionX() <= appStates.PADDING_BOARD) {
      player = this.players[1];
    }

    this._increasePoint(player);
    player.increasePoint();
    this._victory(player);

    this._reset();
  }

  _increasePoint(user) {
    this.notify({ name: notifyStates.INCREASE_POINT, data: user });
  }

  _victory(player) {
    if (player.getPoint() >= appStates.VICTORY_POINT) {
      this.notify({ name: notifyStates.VICTORY, data: player });

      this.players.forEach((player) => {
        player.resetPoint();
      });
    }
  }

  _initialization() {
    this.board.resize();
    this._connetionPlayers();
    this._createBall();
    this._createRockets();
    this._paintMainShape();
  }

  _addListeners() {
    this.players[0].addMoveRocketListener(
      movementStates.KEY_UP_FIRST_PLAYER,
      movementStates.KEY_DOWN_FIRST_PLAYER,
      this.board
    );

    this.players[0].cancelMoveRocketListener(
      movementStates.KEY_UP_FIRST_PLAYER,
      movementStates.KEY_DOWN_FIRST_PLAYER
    );

    this.players[1].addMoveRocketListener(
      movementStates.KEY_UP_SECOND_PLAYER,
      movementStates.KEY_DOWN_SECOND_PLAYER,
      this.board
    );

    this.players[1].cancelMoveRocketListener(
      movementStates.KEY_UP_SECOND_PLAYER,
      movementStates.KEY_DOWN_SECOND_PLAYER
    );

    window.addEventListener('keydown', (event) => {
      if (event.code === movementStates.KEY_START_GAME && !this.isPlaying) {
        this._animation(this._move.bind(this));
        this.isPlaying = true;
      }
    });
  }

  _connetionPlayers() {
    const firstPlayer = new Player(1, usersStates.FIRST_PLAYER);
    const secondPlayer = new Player(2, usersStates.SECOND_PLAYER);

    this.players.push(firstPlayer, secondPlayer);
  }

  _createBall() {
    const $canvas = this._getCanvas();
    this.ball = this.factory.createBall(
      this.canvasSelector,
      $canvas.width / 2,
      $canvas.height / 2
    );
  }

  _createRockets() {
    const $canvas = this._getCanvas();

    const rocketFirstPlayer = this.factory.createRocket(
      this.canvasSelector,
      appStates.PADDING_BOARD,
      $canvas.height / 2 - appStates.HEIGHT_ROCKET / 2
    );
    this.players[0].setRocket(rocketFirstPlayer);

    const rocketSecondPlayer = this.factory.createRocket(
      this.canvasSelector,
      $canvas.width - appStates.PADDING_BOARD - appStates.WIDTH_ROCKET,
      $canvas.height / 2 - appStates.HEIGHT_ROCKET / 2
    );
    this.players[1].setRocket(rocketSecondPlayer);
  }

  _animation(move) {
    this.idAnimationFrame = window.requestAnimationFrame(move.bind(this));
  }

  _cancelAnimation() {
    window.cancelAnimationFrame(this.idAnimationFrame);
  }

  _reset() {
    const $canvas = this._getCanvas();
    const context = $canvas.getContext('2d');
    context.clearRect(0, 0, $canvas.width, $canvas.height);

    console.log(this.factory);

    this._createBall();
    this._createRockets();
    console.log(this.ball);
    console.log(this.players);
    this._paintMainShape();
    this.isPlaying = false;
  }

  _paintMainShape() {
    this.players.forEach((player) => {
      player.getRocket().draw();
    });

    this.ball.draw();
  }

  _getCanvas() {
    return document.querySelector(this.canvasSelector);
  }
}
