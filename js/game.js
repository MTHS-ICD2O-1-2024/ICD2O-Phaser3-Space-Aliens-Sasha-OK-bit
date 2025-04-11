// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha. Vorontsov
// Created on: April 11th
// This file contains the JS functions for index.html

/**
 * Start Phaser Game
 */

  const config = {
    type: Phaser.AUTO,
    width: 1920,
    length: 1080,
    backgroundColor:0x5f6e7a
  }

  const game = new Phaser.Game (config)
  console.log(game)
