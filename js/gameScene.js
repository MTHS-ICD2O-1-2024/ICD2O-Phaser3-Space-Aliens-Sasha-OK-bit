// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha. Vorontsov
// Created on: April 29th
// This file contains the JS functions for index.html

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Game Scene")

    // image
    this.load.image("starBackground", "assets/starBackground.png")
    this.load.image("ship", "assets/spaceShip.png")
  }

  create (data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }


    

  update (time,delta) {
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
  
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }
  }
}

export default GameScene