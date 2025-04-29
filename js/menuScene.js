// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha. Vorontsov
// Created on: April 29th
// This file contains the JS functions for index.html

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')
  }

  create (data) {
  }

  update (time,delta) {
  }
}

export default MenuScene