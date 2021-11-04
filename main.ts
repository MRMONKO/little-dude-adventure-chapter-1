namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const oicture = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile1`)) {
        game.showLongText("It's A Cardboard Box Person Holding a sign.", DialogLayout.Bottom)
        game.showLongText("It says: Welcome To-", DialogLayout.Bottom)
        game.showLongText("The Rest Is Glazed in ice.", DialogLayout.Bottom)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 f 1 f 1 1 1 . . . . . 
        . . . . 1 f 1 f 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 f 1 f 1 . . . . . 
        . . . . 1 1 1 f 1 f 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 f 1 f 1 1 . . . . . 
        . . . . 1 1 f 1 f 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `)
})
let picture: Sprite = null
let Snowzone = 0
let mySprite: Sprite = null
info.setLife(5)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 f 1 f 1 . . . . . 
    . . . . 1 1 1 f 1 f 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . 1 1 . 1 1 1 . 1 1 . . . . 
    . . . 1 1 . 1 1 1 . 1 1 . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 8))
scene.cameraFollowSprite(mySprite)
game.setDialogFrame(img`
    ..ffffffffffffffffffff..
    .f11ff11ff11ff11ff11fff.
    fff11ff11ff11ff11ff11f1f
    ff1ffffffffffffffffff11f
    f11ffbbbbbbbbbbbbbbff1ff
    f1ffbbbbbbbbbbbbbbbbffff
    ffffbbbbbbbbbbbbbbbbff1f
    ff1fbbbbbbbbbbbbbbbbf11f
    f11fbbbbbbbbbbbbbbbbf1ff
    f1ffbbbbbbbbbbbbbbbbffff
    ffffbbbbbbbbbbbbbbbbff1f
    ff1fbbbbbbbbbbbbbbbbf11f
    f11fbbbbbbbbbbbbbbbbf1ff
    f1ffbbbbbbbbbbbbbbbbffff
    ffffbbbbbbbbbbbbbbbbff1f
    ff1fbbbbbbbbbbbbbbbbf11f
    f11fbbbbbbbbbbbbbbbbf1ff
    f1ffbbbbbbbbbbbbbbbbffff
    ffffbbbbbbbbbbbbbbbbff1f
    ff1ffbbbbbbbbbbbbbbff11f
    f11ffffffffffffffffff1ff
    f1f11ff11ff11ff11ff11fff
    .fff11ff11ff11ff11ff11f.
    ..ffffffffffffffffffff..
    `)
let Box = sprites.create(assets.image`myImage`, SpriteKind.NPC)
tiles.placeOnTile(Box, tiles.getTileLocation(18, 6))
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        Snowzone = 1
    } else {
        Snowzone = 0
    }
    if (Snowzone == 1) {
        effects.blizzard.startScreenEffect()
    } else {
        effects.blizzard.endScreenEffect()
    }
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.stairWest)) {
        picture = sprites.create(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fffff111fffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffffffffffff111fffffff111ffff111fffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffffffffffff111fffffff111ffff111fffff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffffffffffff111fffffff111ffff111fffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fffff111fffffff111ffff111fffff111ffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fff1111111fff1111111ff111fffff111fffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fff1111111fff1111111ff111fffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fff1111111fff1111111ff111fffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fffff111fffffff111ffff111fffff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fffff111fffffff111ffff111fffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fffff111fffffff111ffff111fffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fffff111fffffff111ffff111ffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffffffff111fffff111fffffff111ffff111fffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111ffff111fffff111fffffff111ffff111fffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111ffff111fffff111fffffff111ffff111fffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111ffff111fffff111fffffff111ffff111fffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111fffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111ffffffffffffffffffff111ffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fffffff111ffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fffffff111fff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fffffff111fff1111f111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fffffff111fff1111ffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fffffff111fff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fffffff111fff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fff1111111ffff1111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fff1111111ffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fff1111111fffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff111fff1111fff11fff11fffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111ffff111fff1111111ffffff11fff11ffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111fffffffff1111ffffff11fff11ffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111fffffffff1111ffffff1111111fffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111fffffffffffffffffff1111111ffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff11111fffffffffff111ffffffffffffffff111111111fffffffffffffff111fffffffffffffffffffffffff111111ffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff11111fffffffffff111ffffffffffffffff1111111111fffff111fffff1111fffff111fffffffffffffffff111111ffffff111111ffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff11111fffffffffff111ffff111ffff111ff1111f11111fffff111fffff1111fffff111fffff111fff111fff111111ffff11111111ffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff111f111ffffffffff111ffff111fff1111ff111fff1111fffff111fffff111ffffff111fffff111fff111fff1111111ff1111111111fffffffffffffffff
            ffffffffffffffffffffffffffffffffffff111f111ffffffffff111ffff1111ff1111ff1111111111fffff1111ffff111ffffff111fffff111fff111fff1111111ff1111111111fffffffffffffffff
            ffffffffffffffffffffffffffffffffffff111f111ffffffffff111ffff1111ff1111ff1111111111fffff1111ffff111ffffff111fffff111fff111fff1111111ff1111fff111fffffffffffffffff
            ffffffffffffffffffffffffffffffffff111fffff111fff11111111ffff1111ff111fff1111111111fffff1111ffff111fff111111111ff111fff111fff111f111ff111ff11111fffffffffffffffff
            ffffffffffffffffffffffffffffffffff111fffff111fff11111111fffff1111f111fff111fffffffffff111111ff1111fff111111111ff111fff111fff111ffffff1111111111fffffffffffffffff
            ffffffffffffffffffffffffffffffffff11111111111fff11111111fffff11111111fff111ffffffffff1111111ff1111fff111111111ff111fff111fff111ffffff1111111111fffffffffffffffff
            ffffffffffffffffffffffffffffffffff11111111111fff111ff111fffff11111111fff11111ffffffff111111111111fffffff111fffff111fff111fff111ffffff1111111ffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff11111111111fff111ff111ffffff1111111fff1111111ffffff111f11111111fffffff111fffff111fff111fff111ffffff11111ffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff111fffff111fff111ff111ffffff111111ffff1111111ffffff111f11111111fffffff111fffff111fff111fff111ffffff11111ffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff111fffff111fff11111111fffffff11111ffff1111111fffff1111ff111111ffffffff111fffff111fff111fff111fffffff11111fffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff111fffff111fff11111111fffffff11111ffff1111111fffff1111ff11111fffffffff111fffff111111111fff111ffffffff11111111fffffffffffffffff
            ffffffffffffffffffffffffffffffffff111fffff111fff11111111ffffffff111fffff1111111fffff111fff11111fffffffff111ffffffff111ffffff111fffffffff1111111fffffffffffffffff
            ffffffffffffffffffffffffffffffffff111fffff111ffffffffffffffffffffffffffffff1111fffff111fff11111fffffffff111ffffffff111ffffff111fffffffff1111111fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111ffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff11111ffffffff1111ffff111111ffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffff1111ffffffffffffff1111111fffffffff1111fffffffffffffffffffffffffffffffffffff11111fffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffff1111fffffffffffff11111111fffffff11111ffffffffffffffffffffffffffffffffffff111111fffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff111f111fffffffffffffffffff1111fffffffffffffffff11111fffff111111ffffffffffffffff111111ffffffffffffff111111fffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffff1111ffffffffffffffffff1111ffff1111111ffffffffffffffff11111111ffffffffffff111111fffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffff1111ffffffffffffffffff1111ffff1111111ffffffffffffffff1111111111ffffffff111111111ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffff11111fffffffffffffffff11111ffff1111111ffffffffffffffffffff111111ffffffff1111f1111ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff11111ffffffffffffff111111111ffffffff111ffffffffffffffffffffff1111fffffff1111fff111ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffff111111fffffffffffffff11111111fffffffff111fffffffffffffffffffffff111ffffffffffffff111ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffff111111ffffffffffffffff1111111ffffffffff111fffffffffffffffffffffff11111ffffffffffff111ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffff1111111ffffffffffffffffffff11111fffffffff111fffffffffffffffffffffff11111ffffffffffff111ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffff111111ffffffffffffffffffffff11111ffffffff111ffffffffffffffffffffffff1111ffffffffffff111ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff111111111111fffff111111fffffffffffffffffffffffff11111fffffff111fffffffffffffffffffffffff111ffffffffffff111ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff111111111111fff1111111fffffffffffff111fffffffffff1111fffffff111ffffffffffffffffffffffff1111ffffffffffff1111fffffffff
            ffffffffffffffffffffffffffffffffffffffffffff111111111111fff111111111111111fffff111ffffffffffff111fffffff111ffffffffffffffffffffffff1111ffffffffffff1111fffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffff111fffffffff111111fffffff111fffffffffffffffffffffff11111fffffffffffff111fffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111ffffffffffffff111111111fffffff111fffffffffffffffff1111111111ffffffffffffff111fffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffff1111fffffffff111fff1111111111111111ffffffffff111fffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffff11111111111fffff111fff1111111111111111ffff11111111111111ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffff111fff1111111111111111ffff11111111111111ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffff11111111111fffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `, SpriteKind.oicture)
        tiles.placeOnTile(picture, tiles.getTileLocation(16, 6))
        scene.cameraFollowSprite(picture)
    } else {
    	
    }
})
