// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha. Vorontsov
// Created on: April 11th
// This file contains the JS functions for index.html

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
// Our game scene
const splashScene = new SplashScene()
const titleScene = new TitleScene()
/**
 * Start Phaser Game
 */

  const config = {
    type: Phaser.AUTO,
    width: 1920,
    length: 1080,
    backgroundColor:0xffffff,
    scale: {
      mode: Phaser.Scale.FIT,
      //we place it in the middle of the page
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
  }

const game = new Phaser.Game (config)

// load scenes
// NOTE: remeber any "key" is global and CAN NOT be reused
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene) 

//start title
game.scene.start('splashScene')
