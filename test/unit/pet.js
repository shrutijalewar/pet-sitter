/* global describe, it  */
/* jshint expr:true */
'use strict';

var expect = require('chai').expect;
var Pet = require('../../app/model/pet');
describe('Pet', function(){
  describe('constructor', function(){
    it('should create a new Pet', function(){
      var pet = new Pet();
      expect(pet).to.be.ok;
      expect(pet).to.be.instanceof(Pet);
    });
    it('should create a new Pet', function(){
      var pet = new Pet('Fluffy', 3, 'female', 'lizard');
      expect(pet.name).to.equal('Fluffy');
      expect(pet.age).to.equal(3);
      expect(pet.gender).to.equal('female');
      expect(pet.species).to.equal('lizard');
      expect(pet.isZombie).to.be.false;
       expect(pet.wins).to.equal(0);
      expect(pet.health).to.be.within(10,100);
      expect(pet.energy).to.be.within(10,100);
      expect(pet.full).to.be.within(10,100);

    });
  });
});

describe('#walk', function(){
  it('should increase health but decrease energy and full',function(){
    var pet = new Pet('Fluffy', 3, 'female', 'lizard' );
    pet.health = 90;
    pet.energy = 30;
    pet.full = 20;

    pet.walk();
    
    expect(pet.health).to.be.within(91,93);
    expect(pet.energy).to.be.within(26,28);
    expect(pet.full).to.be.within(15,17);

  });
});

describe('#sleep', function(){
  it('should increase health and energy but decrease full',function(){
    var pet = new Pet('Fluffy', 3, 'female', 'lizard' );
    pet.health = 90;
    pet.energy = 30;
    pet.full = 20;

    pet.sleep();
    
    expect(pet.health).to.be.within(92,93);
    expect(pet.energy).to.be.within(31,35);
    expect(pet.full).to.be.within(13,16);

  });
});


describe('#eat', function(){
  it('should increase health but decrease energy and full',function(){
    var pet = new Pet('Fluffy', 3, 'female', 'lizard' );
    pet.health = 90;
    pet.energy = 30;
    pet.full = 20;

    pet.eat();
    
    expect(pet.health).to.be.within(91,94);
    expect(pet.energy).to.be.within(22,27);
    expect(pet.full).to.be.within(25,29);

  });
  });

describe('#attack', function(){
  it('should allow pets to fight',function(){
    var Fluffy = new Pet('Fluffy', 3, 'female', 'sloth' );
    Fluffy.health = 45;
    Fluffy .energy = 60;
    Fluffy.full = 90;
    var Baxter = new Pet('Baxter', 5, 'female', 'monkey' );
    Baxter.health = 70;
    Baxter.energy = 60;
    Baxter.full = 90;

    Fluffy.attack(Baxter);

    expect(Baxter.health).to.be.within(54.5, 59.5);
    expect(Baxter.isZombie).to.be.false;

  });

  it('should cause a pet with negative health to become a zombie', function(){
    var Fluffy = new Pet('Fluffy', 3 , 'female', 'sloth');
    var Baxter = new Pet('Baxter', 5 , 'female', 'monkey');

    for(var i = 0; i < 1000; i++){
      Fluffy.attack(Baxter);
    }
    expect(Baxter.isZombie).to.be.true;
    expect(Fluffy.wins).to.equal(1);
   });
  });
   it('should allow a zombie pet to attack', function(){
   var Fluffy = new Pet('Fluffy', 3, 'female', 'sloth');
   Fluffy.health = 50;

   var Baxter = new Pet('Baxter', 5, 'male', 'monkey');
   Baxter.isZombie = true;

   Baxter.attack(Fluffy);

   expect(Fluffy.health).to.be.within(45,50);
   expect(Fluffy.isZombie).to.be.false;
   });

  describe('#resurrect', function(){
  it('should resurrect the pet', function(){
    var Fluffy = new Pet('Fluffy', 3 , 'female', 'sloth');
    Fluffy.isZombie = true;
    Fluffy.wins = 8;

    Fluffy.resurrect();

    expect(Fluffy.isZombie).to.be.false;
    expect(Fluffy.wins).to.be.equal(3);
    expect(Fluffy.health).to.be.within(25,50);
    
  });
  

  it('should not resurrect the pet', function(){
    var Fluffy = new Pet('Fluffy', 3 , 'female', 'sloth');
    Fluffy.isZombie = false;
    Fluffy.wins = 8;
    
    Fluffy.resurrect();

    expect(Fluffy.isZombie).to.be.false;
    expect(Fluffy.wins).to.be.equal(8);

  });

  it('should not resurrect the pet', function(){
    var Fluffy = new Pet('Fluffy', 3 , 'female', 'sloth');
    Fluffy.isZombie = true;
    Fluffy.wins = 3;

    Fluffy.resurrect();

    expect(Fluffy.isZombie).to.be.true;
    expect(Fluffy.wins).to.be.equal(3);
    
    });
  });


