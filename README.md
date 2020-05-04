Game Name: Bar[F]
By: Alexander Shaham, Brandon Leoung, Terence So
Date Completed: 5/3/2020
Creative Tilt: 
    "Our design attempted to turn a typical endless runner (in which you dodge obstacles and collect items to increase your score) into a dynamic balancing act where player choices modify the difficulty in real time.

    Collectibles do not immediately increase score; instead, they have to be cashed in at certain intervals. Each collectible held increases the game speed until cashed in, therefore increasing the game difficulty. The action of cashing in collectibles for points is also features risk/reward because you are immobile while doing so, which puts you closer to the edge of the screen (which makes you lose).

    We use royalty free sounds/music. I am particularly proud of how the vomit system works. The score increments slowly and plays a sound for every time you turn in a beer by vomiting into the manhole. Also with how it uses the animations. The code definitely surpasses that of the class examples, and required new/creative knowledge to execute. I used the rocket patrol mods as a basis for the code, so I have to give
    some credit to Professor Nathan Altice.

    Our game also has pretty good pixel art and animations. :)"

Commit #1:
    Created the basics for everything. Expand on runner controls,
    and further develop play scene. Additionally add obstacle and
    checkpoint objects (sprites + conditions). Use temp tile bg.
    Maybe throw in some sound stuff?

Commit #2:
    Allowed direction flipping based on movement. Created some
    backbone for the prefabs.

Commit #3:
    Added tutorial scene. Edited controls and scene linking.
    Added assets, and progressed on the runner prefab -
    working on conditions and movement.

Commit #4:
    Reworking the standard platformer to a better scoped game
    for the time frame. Changed the bootleg physics to a more
    simplistic mechanic based game via movement and map
    orientation.

Commit #5:
    Enacted the changes discussed in 4/25 meeting. Overhaul to
    the aesthetic. Added killzone sprite. Resized map and models.
    Beer awards points now. Car cycles through screen and bumps
    player backward. Player has vertical/downward motion as well
    as temporarily left/right. Huge patch.

Commit #6:
    Expanding on commit #5 - making a playtestable version of the
    game. Missing many mechanics and assets, but its to get a feel
    of the game and direction. Also to get feedback. Notable changes
    are car rng speed, layout, math of dimensions, score, and some
    hot fixes.

Commit #7:
    Massive overhaul of art assets; using a few new temporary ones.
    Touching up hitboxes and sizing. Also overall organization of
    on screen stuff and code.

Commit #8:
    Changed mechanics between barrier and player - sliding the player
    rather than pushing. Additionally player winds up to middle of
    screen if not there and not touching a barrier. Also fixed the
    timing and lane spawning for beer and manhole. Need to add
    another layer of rng to the beer like adding a 2nd one? Maybe
    add layer checking to make sure no spawned asset is stacking.

Commit #9:
    Changed background arts. Added a beer dumping mechanism that
    cashes in beers for points into the manhole. Waiting on
    animations to implement. Need to revamp the barrier spawns:
    spawn them -x rng. Fix framerate for different monitors -
    make a global one.

Commit #10:
    Added some animations. Fixing up all of the animations.

Commit #11:
    Added run animation properly. Adjusted sizings. Need to fix
    the hitboxes of everything. Animation also stops when hitting
    a barrier. Also need to add the vomit animation, and tweek
    spawns/timers.

Commit #12:
    Quick patch for hitbox correction and scaling.

Commit #13:
    Game is done. Just needs balancing with timers and spawners.
    Additionally could add something to stop object stacking.

Commit #14:
    Game is good to go as is. I think there might be an asset
    update? Maybe not, either way its chill. Touch up the
    tutorial and make a collision bumper to space objects for
    the next and last commit.

Commit #15:
    Game is done. Any fine tuning will be to animations and/or
    menu/tutorial scenes.