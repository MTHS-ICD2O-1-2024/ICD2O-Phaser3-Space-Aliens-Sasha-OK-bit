// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha. Vorontsov
// Created on: April 29th
// This file contains the JS functions for index.html

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')
    this.preload.image('menuSceneBackground', 'assets/aliens_screen_image2.jpg')
    this.preload.image('startButton', 'assets/start.png')
  }

  create (data) {
        this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground' )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton() )
  }

  update (time,delta) {
  }

  createButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene