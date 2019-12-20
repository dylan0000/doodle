namespace SpriteKind {
    export const trampoline1 = SpriteKind.create()
    export const slider = SpriteKind.create()
    export const slider2 = SpriteKind.create()
    export const slider3 = SpriteKind.create()
    export const booster = SpriteKind.create()
    export const movingtrampoline = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const supertrampoline = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    jared.setVelocity(0, -1000)
})
scene.onHitTile(SpriteKind.Player, 13, function (sprite) {
    jared.setPosition(950, 980)
    info.startCountdown(30)
    game.splash("heres a bonus level")
    jared.setPosition(950, 980)
    // moving trampoline
    for (let value2222 of scene.getTilesByType(9)) {
        slider22 = sprites.create(img`
1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 
1 1 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
1 f f f 7 7 7 7 7 7 7 7 f f f 1 
2 f f 1 1 1 1 1 1 1 1 1 1 f f 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.slider2)
        value2222.place(slider22)
    }
    game.splash("level 6")
})
// level2 light purple
scene.onHitTile(SpriteKind.Player, 11, function (sprite) {
    game.splash("level 2")
    jared.setPosition(570, 980)
})
// level 3 teleporter brown
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    game.splash("level 3")
    jared.setPosition(950, 960)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.trampoline1, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.movingtrampoline, function (sprite, otherSprite) {
    jared.vy = -150
    // jumping animation
    animation.runImageAnimation(
    jared,
    [img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . f . f f . f . f . f . . . 
. . . f . f . f . . f . f . . . 
. . . f . . f . . f . . f . . . 
. . . . f . . f f . f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f f . . f f . . . . . 
. . . f f f . . . . f f . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`],
    175,
    false
    )
})
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    coin2.destroy()
    game.splash("level 4")
    jared.setPosition(40, 930)
    scene.setTile(9, img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f f f 2 2 . . . . . . 2 2 f f f 
f f . . . . . . . . . . . . f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f a a a a a a a a a a a a f f f f f f f f f f f f f d d d d d d d d d d d f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 1 1 1 1 1 1 7 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 1 1 1 1 1 1 1 1 1 7 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 1 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 1 2 2 1 1 1 1 1 1 7 1 f f f f f f f f f f f f f 1 1 7 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 1 2 2 7 7 7 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 1 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 7 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 1 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 7 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 3 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 5 f 2 1 2 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 1 2 1 1 1 1 1 1 f f f f f f f f f f f f f 1 3 1 1 1 3 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 1 2 1 7 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 3 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 1 1 1 1 1 1 7 1 f f f f f f f f f f f f f f f f f f f f 7 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 9 1 1 1 1 1 1 f 
f 2 2 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 1 7 1 1 1 1 1 1 f f f f f f f f f f f f f 2 2 2 2 2 2 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 1 2 2 2 2 2 2 2 f f f f f f f f f f f f f 2 2 2 2 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 1 2 2 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 1 7 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 1 2 2 2 2 2 2 2 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 1 2 2 2 2 2 2 2 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 1 2 2 2 2 2 2 2 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 7 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 1 1 1 1 5 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 1 1 1 1 7 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 2 2 1 7 2 2 2 2 f f f f f f f f f f f f f 2 2 2 2 2 2 2 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 1 1 7 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 1 7 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 7 2 2 2 2 2 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 2 2 2 2 2 2 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 2 2 2 2 2 2 1 2 2 2 2 2 f f f f f f f f f f f f f 2 1 1 1 1 2 2 2 2 2 2 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 1 1 1 1 2 2 2 2 2 2 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 1 1 1 1 2 2 2 2 2 2 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 2 2 2 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 1 1 1 1 1 1 5 1 1 1 1 1 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 2 2 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 1 2 f f f f f f f f f f f f f f c 1 c 1 c 1 c 1 c 1 c 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 7 1 1 f f f f f f f f f f f f f 2 2 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 2 2 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 2 2 5 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 7 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 2 2 2 2 1 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f 2 2 2 2 2 2 1 1 1 1 1 f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f 2 2 2 2 2 2 2 1 1 7 1 f f f f f f f f f f f f f f 5 5 5 5 5 9 9 5 5 5 5 5 f 
f 1 1 1 1 1 1 1 1 1 1 1 c f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    for (let value3 of scene.getTilesByType(9)) {
        megatrampoline = sprites.create(img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
f f f 2 2 . . . . . . 2 2 f f f 
f f . . . . . . . . . . . . f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.supertrampoline)
        value3.place(megatrampoline)
    }
    for (let value32 of scene.getTilesByType(12)) {
        coin2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.coin)
        animation.runImageAnimation(
        coin2,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
        100,
        true
        )
        value32.place(coin2)
    }
    scene.setTile(12, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
    scene.setTile(3, img`
b b b b b b b b b b b b b b b b 
b c b a 3 3 3 3 3 3 3 3 a b c b 
b b a 3 3 3 3 3 3 3 3 3 3 a b b 
b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
b b 3 1 3 3 3 3 3 3 3 3 1 3 b b 
b b 3 3 1 1 1 1 1 1 1 1 3 3 b b 
b b c 3 3 3 3 3 3 3 3 3 3 c b b 
b b b c c c c c c c c c c b b b 
b c b b b b b b b b b b b b c b 
b b b b b b b b b b b b b b b b 
`, false)
    scene.setTile(10, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
    scene.setTile(13, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
    slider22.destroy()
    slider32.destroy()
    slider4.destroy()
    sprites.create(img`
1 1 1 5 5 5 5 5 5 5 5 5 5 1 1 1 
1 1 5 5 5 5 5 5 5 5 5 5 5 5 1 1 
1 f f f 5 5 5 5 5 5 5 5 f f f 1 
f f f 1 1 1 1 1 1 1 1 1 1 f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.booster).destroy()
    // adds a boosting trampoline with vy-200
    for (let value2 of scene.getTilesByType(5)) {
        supertramp = sprites.create(img`
1 1 1 5 5 5 5 5 5 5 5 5 5 1 1 1 
1 1 5 5 5 5 5 5 5 5 5 5 5 5 1 1 
1 f f f 5 5 5 5 5 5 5 5 f f f 1 
f f f 1 1 1 1 1 1 1 1 1 1 f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.booster)
        value2.place(supertramp)
    }
    mySprite = sprites.create(img`
. . . . c c c c c c c c . . . . 
. . . c c c c c c c c c c . . . 
. . c c c c c c c c c c c c . . 
. c c c c c c c c c c c c c c . 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
. c c c c c c c c c c c c c c . 
. . c c c c c c c c c c c c . . 
. . . c c c c c c c c c c . . . 
. . . . c c c c c c c c . . . . 
`, SpriteKind.movingtrampoline)
})
// boost pad
sprites.onOverlap(SpriteKind.Player, SpriteKind.booster, function (sprite, otherSprite) {
    jared.vy = -300
    // jumping animation
    animation.runImageAnimation(
    jared,
    [img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . f . f f . f . f . f . . . 
. . . f . f . f . . f . f . . . 
. . . f . . f . . f . . f . . . 
. . . . f . . f f . f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f f . . f f . . . . . 
. . . f f f . . . . f f . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`],
    175,
    false
    )
})
// next level block
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    jared.vy = -150
    // jumping animation
    animation.runImageAnimation(
    jared,
    [img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . f . f f . f . f . f . . . 
. . . f . f . f . . f . f . . . 
. . . f . . f . . f . . f . . . 
. . . . f . . f f . f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f f . . f f . . . . . 
. . . f f f . . . . f f . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`],
    175,
    false
    )
})
// slider jumping
sprites.onOverlap(SpriteKind.Player, SpriteKind.slider, function (sprite, otherSprite) {
    jared.vy = -150
    // jumping animation
    animation.runImageAnimation(
    jared,
    [img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . f . f f . f . f . f . . . 
. . . f . f . f . . f . f . . . 
. . . f . . f . . f . . f . . . 
. . . . f . . f f . f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f f . . f f . . . . . 
. . . f f f . . . . f f . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`],
    175,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    game.splash("level 5")
    jared.setPosition(570, 960)
})
// slider jumping
sprites.onOverlap(SpriteKind.Player, SpriteKind.slider3, function (sprite, otherSprite) {
    jared.vy = -150
    // jumping animation
    animation.runImageAnimation(
    jared,
    [img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . f . f f . f . f . f . . . 
. . . f . f . f . . f . f . . . 
. . . f . . f . . f . . f . . . 
. . . . f . . f f . f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f f . . f f . . . . . 
. . . f f f . . . . f f . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`],
    175,
    false
    )
})
// hitting ground
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(false, effects.dissolve)
})
// hitting trampoline
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    // jump
    jared.vy = -150
    // jumping animation
    animation.runImageAnimation(
    jared,
    [img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . f . f f . f . f . f . . . 
. . . f . f . f . . f . f . . . 
. . . f . . f . . f . . f . . . 
. . . . f . . f f . f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f f . . f f . . . . . 
. . . f f f . . . . f f . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`],
    175,
    false
    )
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
// moving platform physics
sprites.onOverlap(SpriteKind.Player, SpriteKind.slider2, function (sprite, otherSprite) {
    jared.vy = -150
    // jumping animation
    animation.runImageAnimation(
    jared,
    [img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . f . f f . f . f . f . . . 
. . . f . f . f . . f . f . . . 
. . . f . . f . . f . . f . . . 
. . . . f . . f f . f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f f . . f f . . . . . 
. . . f f f . . . . f f . . . . 
. . . . . . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . f . . . f f f f . . f . . . 
. . . f f f . f f . f f f . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f . . . . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . f f . . f f . . f f . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . f f . . . . f f . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f . f f . f . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`],
    175,
    false
    )
})
let mySprite: Sprite = null
let megatrampoline: Sprite = null
let coin2: Sprite = null
let slider32: Sprite = null
let slider22: Sprite = null
let slider4: Sprite = null
let supertramp: Sprite = null
let jared: Sprite = null
game.splash("5 levels")
jared = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f f . f . f . . . . . 
. . . . . f . f . . f . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f . f f . f . . . . . 
. . . . f . . f f . f . . . . . 
. . . . f . . f f . . f . . . . 
. . . . f . f . . f . f . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
. . . . . f . . . . f . . . . . 
`, SpriteKind.Player)
jared.ay = 200
jared.setPosition(40, 975)
scene.cameraFollowSprite(jared)
controller.moveSprite(jared, 100, 0)
scene.setTileMap(img`
f b b b b b b b b b b b b f f f f f f f f f f f f f f e e e e e e e e e e e e f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 7 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 7 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . . . . . . . f f f f f f f f f f f f 5 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 7 2 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 7 1 1 1 f f f f f f f f f f f f f f . . . 5 . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . f f f . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 7 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . 7 . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 7 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 7 f 
f 1 1 1 1 1 1 c 1 1 1 1 1 f f f f f f f f f f f f f f . . . 9 . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 7 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 7 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 7 1 1 f f f f f f f f f f f f f f . . . . . . . c . 7 . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . c . . . . f f f f f f f f f f f f 1 1 1 1 1 7 2 2 2 2 2 2 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . c . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 c 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 7 1 1 1 f f f f f f f f f f f f f f . . . . . 7 . . . . . . f f f f f f f f f f f f 7 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 7 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 c 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . 8 . . . . . . . . . . f f f f f f f f f f f f 1 1 1 7 1 c 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 c 1 1 1 1 1 f 
f 1 1 1 1 1 1 7 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 c 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 c 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . 7 . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 c 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 c 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 7 1 f f f f f f f f f f f f f f . . . . . c . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 c 1 1 1 1 f 
f 1 1 1 1 1 1 c 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . c c . . . . f f f f f f f f f f f f 2 2 2 2 2 2 1 c 1 2 2 2 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . 7 . . . . c . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 c 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 c 1 1 1 1 f 
f 1 1 1 1 1 1 7 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . 7 . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 5 2 2 2 2 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . c . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 4 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . c . . 7 . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . c . . . . . . . . . f f f f f f f f f f f f 1 1 7 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . 7 . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 7 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 c 1 1 7 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 c 1 1 1 1 1 f 
f 1 1 1 1 1 c 1 1 1 1 2 2 f f f f f f f f f f f f f f . . . 7 c . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 c 1 1 1 1 1 f 
f 1 1 1 1 1 c 1 1 1 2 2 2 f f f f f f f f f f f f f f . . . . . c . . . . . . f f f f f f f f f f f f 2 2 2 1 1 1 1 2 2 2 2 2 f 
f 1 1 1 1 1 c 1 1 2 2 2 2 f f f f f f f f f f f f f f . . . . . c . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 7 1 1 1 1 1 f 
f 2 1 1 1 1 c 1 2 2 2 2 2 f f f f f f f f f f f f f f . . . . . . c . 7 . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 1 1 c 1 2 2 2 2 2 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 1 c 1 2 2 2 2 2 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 2 2 2 1 c 1 2 2 2 2 2 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 2 2 2 2 7 c 1 1 1 2 2 2 f 
f 2 1 1 1 1 c 1 2 2 2 2 2 f f f f f f f f f f f f f f . . . . . . . 7 . . . . f f f f f f f f f f f f 1 1 1 1 1 c 1 1 1 1 1 1 f 
f 2 1 1 1 1 c 1 2 2 2 2 2 f f f f f f f f f f f f f f . . . . c . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 c 1 1 1 1 1 1 f 
f 2 1 1 1 1 c 1 2 2 2 2 2 f f f f f f f f f f f f f f . . . . . c c . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 1 1 1 1 1 2 2 2 2 2 f f f f f f f f f f f f f f . . 7 . . . . c . . . . f f f f f f f f f f f f 1 1 1 1 1 7 1 1 1 1 1 1 f 
f 2 1 1 1 1 1 1 1 2 2 2 2 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 7 1 1 1 1 1 1 1 1 2 2 f f f f f f f f f f f f f f . . . . . . . . . . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 2 1 1 1 1 5 1 1 1 1 1 2 f f f f f f f f f f f f f f . . . . . . . . 7 . . . f f f f f f f f f f f f 1 1 1 1 1 1 1 1 7 1 1 1 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 f 
`)
scene.setBackgroundImage(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 1 f f 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 f f 1 1 1 1 1 1 1 f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 f 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 1 f f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 1 f f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 f f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 f f 1 1 1 f f 1 1 1 f f f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 f f f f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 f f f f f f 1 1 1 1 1 1 f 1 1 1 1 f f f f f f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 f 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f f f f f f f f f 1 1 1 f 1 1 f f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 1 f 1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 f f 1 1 1 1 f f f f f 1 1 1 1 1 f 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 f f 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 1 1 f f f 1 1 1 1 f 1 1 1 f f 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 f 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 f f f 1 1 1 1 1 1 f 1 f 1 1 1 1 1 f 1 1 1 f f 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 f 1 1 f f 1 1 1 f 1 1 f 1 1 1 1 1 f 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 f 1 1 1 f f 1 1 f 1 1 f 1 1 1 1 1 f 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 f 1 1 f f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 f f f 1 1 1 1 f 1 1 f f f f f f f f 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 1 f f f f f f 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f f 1 1 f f 1 1 1 f 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 f f 1 1 f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 f f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f 1 1 1 1 1 1 1 f 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 f f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 f f f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 f f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 f f f f f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 f 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f f f f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f 1 1 f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(7, img`
1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 
1 1 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
1 f f f 7 7 7 7 7 7 7 7 f f f 1 
f f f 1 1 1 1 1 1 1 1 1 1 f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(2, img`
5 5 5 5 2 2 2 5 5 5 5 5 4 2 4 4 
5 2 2 2 2 4 5 2 2 2 5 5 2 4 4 5 
5 2 2 4 4 4 5 5 2 5 5 2 2 5 5 5 
5 2 4 2 4 4 4 5 2 2 2 2 5 5 5 5 
5 2 2 2 2 2 4 5 5 2 4 2 2 5 5 5 
4 2 2 2 2 2 4 2 5 5 2 2 4 4 4 5 
4 2 2 2 2 2 2 4 5 5 4 4 4 2 4 5 
4 5 2 2 2 4 2 4 5 4 2 4 2 5 4 5 
4 4 2 5 2 2 4 4 4 4 2 2 5 5 4 5 
4 4 2 5 2 2 4 2 4 4 2 2 5 5 4 5 
5 5 2 2 2 4 4 2 4 4 5 2 5 5 4 5 
4 4 2 2 2 4 4 2 2 2 2 2 5 5 4 4 
5 4 4 2 4 4 4 2 4 5 5 4 4 4 2 4 
4 5 2 4 4 4 4 4 5 5 4 4 4 2 2 4 
4 5 2 4 4 5 4 4 4 4 2 4 2 4 2 4 
4 5 5 5 5 5 4 4 2 2 2 2 4 2 4 4 
`, true)
scene.setTile(11, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
scene.setTile(6, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
scene.setTile(9, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
scene.setTile(8, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
scene.setTile(4, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
scene.setTile(5, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
scene.setTile(14, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
scene.setTile(12, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
let trampoline = sprites.create(img`
1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 
1 1 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
1 f f f 7 7 7 7 7 7 7 7 f f f 1 
f f f 1 1 1 1 1 1 1 1 1 1 f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.trampoline1)
trampoline.setPosition(40, 980)
// this sets trampoline sprite to every block with
// this color
for (let value of scene.getTilesByType(7)) {
    value.place(trampoline)
}
// adds a boosting trampoline with vy-200
for (let value22 of scene.getTilesByType(5)) {
    supertramp = sprites.create(img`
1 1 1 5 5 5 5 5 5 5 5 5 5 1 1 1 
1 1 5 5 5 5 5 5 5 5 5 5 5 5 1 1 
1 f f f 5 5 5 5 5 5 5 5 f f f 1 
f f f 1 1 1 1 1 1 1 1 1 1 f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.booster)
    value22.place(supertramp)
}
// moving trampoline
for (let value222 of scene.getTilesByType(8)) {
    slider4 = sprites.create(img`
1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 
1 1 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
1 f f f 7 7 7 7 7 7 7 7 f f f 1 
2 f f 1 1 1 1 1 1 1 1 1 1 f f 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.slider)
    value222.place(slider4)
}
// moving trampoline
for (let value22222 of scene.getTilesByType(9)) {
    slider22 = sprites.create(img`
1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 
1 1 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
1 f f f 7 7 7 7 7 7 7 7 f f f 1 
2 f f 1 1 1 1 1 1 1 1 1 1 f f 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.slider2)
    value22222.place(slider22)
}
// moving trampoline
for (let value23 of scene.getTilesByType(4)) {
    slider32 = sprites.create(img`
1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 
1 1 7 7 7 7 7 7 7 7 7 7 7 7 1 1 
1 f f f 7 7 7 7 7 7 7 7 f f f 1 
2 f f 1 1 1 1 1 1 1 1 1 1 f f 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.slider3)
    value23.place(slider32)
}
// moving trampoline start (same for all other ax
// blocks
slider4.ax = 50
slider22.ax = 50
slider32.ax = 50
for (let value33 of scene.getTilesByType(12)) {
    coin2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.coin)
    animation.runImageAnimation(
    coin2,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    value33.place(coin2)
}
// everything under this tile is for the movement of
// the sliding platforms
forever(function () {
    if (slider4.isHittingTile(CollisionDirection.Left)) {
        slider4.ax = 50
    } else if (slider4.isHittingTile(CollisionDirection.Right)) {
        slider4.ax = -50
    } else {
    	
    }
    if (slider22.isHittingTile(CollisionDirection.Left)) {
        slider22.ax = 50
    } else if (slider22.isHittingTile(CollisionDirection.Right)) {
        slider22.ax = -50
    }
    if (slider32.isHittingTile(CollisionDirection.Left)) {
        slider32.ax = 50
    } else if (slider32.isHittingTile(CollisionDirection.Right)) {
        slider32.ax = -50
    }
})
game.onUpdateInterval(1000, function () {
    scene.placeOnRandomTile(mySprite, 3)
})
