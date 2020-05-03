# EndlessRunner
By: Alexander Shaham, Brandon Leoung, Terence So

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