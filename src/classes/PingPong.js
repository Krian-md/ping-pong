'use strict';

import Board from '@/classes/Board';
import Player from '@/classes/Player';
import Rocket from '@/classes/Rocket';
import Ball from '@/classes/Ball';
import ShapeBuilder from '@/classes/ShapeBuilder';

import appStates from '@/enums/appStates';
import movementStates from '@/enums/movementStates';

export default class PingPong {
  constructor(canvasSelector, boardSelector, notify) {
    this.canvasSelector = canvasSelector;
    this.board = new Board(boardSelector, canvasSelector);
    this.notify = notify;
    this.ball = null;
    this.players = [];
    this.idRequestAnimationFrame = 0;
  }

  run() {
    this._configuration();

    this.players.forEach((player) => {
      player.getRocket().draw();
    });

    this.ball.draw();

    this._addPlayerListener();
    this._moveBall();
  }

  _victory() {
    this.players.forEach((player) => {
      if (player.getPoint() >= appStates.VICTORY_POINT) {
        // TODO: return callback to Vue;
      }
    });
  }

  _configuration() {
    this.board.resize();
    //   // this.board.backgroundImage('@/assets/darkWall.jpg');
    //   this.board.backgroundImage(
    //     'https://www.significadofacil.com/wp-content/uploads/2019/07/background.jpg'
    //   );
    this._connetionPlayer();
    this._createBall();
  }

  _addPlayerListener() {
    this.players[0].addRocketMovementListener(
      movementStates.KEY_UP_FIRST_PLAYER,
      movementStates.KEY_DOWN_FIRST_PLAYER,
      this.board,
    );

    this.players[1].addRocketMovementListener(
      movementStates.KEY_UP_SECOND_PLAYER,
      movementStates.KEY_DOWN_SECOND_PLAYER,
      this.board,
    );
  }

  _moveBall() {
    setInterval(() => {
      if (
        this.players[0]
          .getRocket()
          .isCollision(this.ball, movementStates.LEFT) ||
        this.players[1].getRocket().isCollision(this.ball, movementStates.RIGHT)
      ) {
        this.ball.changeMovementDeltaX();
      }

      if (this.board.isCollisionBall(this.ball)) {
        this.ball.changeMovementDeltaY();
      }
      this.ball.reload();
    }, 15);
  }

  _connetionPlayer() {
    const $canvas = this._getCanvas();
    const shapeBuilder = new ShapeBuilder();

    const rocketFirstPlayer = shapeBuilder
      .setShape(new Rocket(this.canvasSelector))
      .setPositionX(appStates.PADDING_BOARD)
      .setPositionY($canvas.height / 2 - appStates.HEIGHT_ROCKET / 2)
      .setWidth(appStates.WIDTH_ROCKET)
      .setHeight(appStates.HEIGHT_ROCKET)
      .setDeltaY(15)
      .build();

    const firstPlayer = new Player(1, 'Player 1', rocketFirstPlayer);

    const rocketSecondPlayer = shapeBuilder
      .setShape(new Rocket(this.canvasSelector))
      .setPositionX(
        $canvas.width - appStates.PADDING_BOARD - appStates.WIDTH_ROCKET,
      )
      .setPositionY($canvas.height / 2 - appStates.HEIGHT_ROCKET / 2)
      .setWidth(appStates.WIDTH_ROCKET)
      .setHeight(appStates.HEIGHT_ROCKET)
      .setDeltaY(15)
      .build();

    const secondPlayer = new Player(2, 'Player 2', rocketSecondPlayer);

    this.players.push(firstPlayer, secondPlayer);
  }

  _createBall() {
    const $canvas = this._getCanvas();
    const shapeBuilder = new ShapeBuilder();

    this.ball = shapeBuilder
      .setShape(new Ball(this.canvasSelector))
      .setPositionX($canvas.width / 2 - appStates.RADIUS_BALL / 2)
      .setPositionY($canvas.height / 2 + appStates.RADIUS_BALL / 2)
      .setRadius(appStates.RADIUS_BALL)
      .setDeltaX(-2)
      .setDeltaY(2)
      .build();
  }

  _requestAnimationFrame(reload) {
    console.log(typeof reload);
    this.idRequestAnimationFrame = window.requestAnimationFrame(reload);
  }

  _getCanvas() {
    return document.querySelector(this.canvasSelector);
  }
}
