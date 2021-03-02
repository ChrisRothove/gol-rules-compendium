import React from "react";

const playerHandbook = [
  {
    keywords: ["player's handbook"],
    notation: false,
    header: (
      <div id="title">
        <h1>Vital Statistics</h1>
      </div>
    ),
    content: <></>,
  },
  {
    keywords: ["player's handbook", "notation", "stats"],
    notation: true,
    header: null,
    content: (
      <p>
        <em>
          Note: in player-only threads, participating players may decide how and
          when to apply stats, damage, and use HP, these stats are mandated to
          all characters for the sake of understanding the character’s battle
          strengths, and for when they engage in “Dungeons and Darkness”
          admin-led battle scenarios.
        </em>
      </p>
    ),
  },
  {
    keywords: ["player's handbook", "stats"],
    notation: false,
    header: <h2>Stats: Overview</h2>,
    content: (
      <div>
        <p>
          Of course, when referring to a roleplaying game the first thing we
          should start talking about is character statistics, which
          realistically define a character’s skills in battle. This implemented
          system uses four independent stats, which are innate to any given
          character, and four dependent stats, which are later modified by
          independent stats or level.
        </p>
        <p>
          All stats, abilities, weapons, items and other battle ready indexable
          items will be kept track of in a character's battle profile (BP),
          which will be linked at the very bottom of this guide. The exception
          to this rule is items purchased from the site store, which will be
          kept in your store inventory until you use one, at which point you
          will send the item to your DM.
        </p>
      </div>
    ),
  },
  {
    keywords: [
      "player's handbook",
      "stats",
      "independent",
      "defense",
      "strength",
      "magic",
      "agility",
      "agl",
      "levelup",
    ],
    notation: false,
    header: <h2>Independent Stats</h2>,
    content: (
      <div>
        <p>
          <strong>Strength (STR)</strong> | Determines physical strength and
          prowess with physical damage weapons. (Also might be called into
          question for certain dungeon puzzles or what have you.
        </p>
        <p>
          <strong>Magic (MAG) </strong>| Determines the magical aptitude and
          strength of the character, to be used when calculating magical healing
          or damage from skills.
        </p>
        <p>
          <strong>Defense (DEF)</strong> | Determines the character’s ability to
          avoid taking damage, as well as their survivability.
        </p>
        <p>
          <strong>Agility (AGL)</strong> | Determines the character’s ability to
          dodge, hit, and their general mobility.
        </p>
        <hr />
        <p>
          Each Level 1 character will begin play with 10 points. to distribute
          between the above stats. No single stat can be higher than 4 or less
          than 1 at Level 1. After BP creation, stat increases can be obtained
          through leveling up; see the 'Level Up' section.
        </p>
      </div>
    ),
  },
  {
    keywords: [
      "player's handbook",
      "stats",
      "dependent",
      "hp",
      "mp",
      "focus gauge",
      "evasion",
      "health",
    ],
    notation: false,
    header: <h2>Dependent Stats</h2>,
    content: <></>,
  },
  {
    keywords: [
      "player's handbook",
      "stats",
      "dependent",
      "hp",
      "health",
      "defense",
    ],
    notation: false,
    header: <></>,
    content: (
      <div>
        <p>
          <strong>Health (HP)</strong> | Determines how long a character can
          keep fighting before they are defeated. In some cases, this may lead
          to death. However, dropping to 0 HP does not guarantee death, but
          rather, unconsciousness. Character death/being lost to the darkness is
          to be discussed between participating parties, will be addressed in
          dungeon/plot specific instances where it is possible, and via admin
          discretion.
        </p>
        <p align="center">
          <strong>Your Max HP is 80 + (2 + 1/2 your DEF)x your level</strong>
        </p>
        <p>
          when determining 1/2 of your DEF, for the purposes of Max HP, the
          minimum is always 1. Which means at each level you'll be increasing
          your HP by at least 3 (2+1). When your DEF increases enough to change
          this number, your max HP changes for each level you currently have, as
          if your DEF was always that number.
        </p>
      </div>
    ),
  },
  {
    keywords: ["player's handbook", "stats", "dependent", "mp", "magic points"],
    notation: false,
    header: <></>,
    content: (
      <div>
        <p>
          <strong>Magic Points (MP)</strong> | Determines how much magical
          stamina you have to continue using skills/spells. Your MP is depleted
          as you use your skills, and when it is empty, you
          <b>can not cast spells or skills for 3 turns</b> while your MP
          regenerates. Items or the break time action can reduce your MP
          recharge, but your MP Recharge can never be lowered beyond two turns.
          You may choose to start your MP regeneration even if your MP is not
          depleted.
        </p>
        <p align="center">
          <strong>
            Your Max MP is 80 + (2 + 1/2 your Mag score)x your level.
          </strong>
        </p>
        <p>
          Just like with HP, 1/2 your mag is always at least 1. If your Mag
          increases enough to change how much MP you gain per level, you gain
          more MP for each level you have as if your MAG had always been that
          high.
        </p>
      </div>
    ),
  },
  {
    keywords: ["player's handbook", "stats", "dependent", "evasion"],
    notation: false,
    header: <></>,
    content: (
      <div>
        <p>
          <strong>Evasion (EV)</strong> | Evasion is a set number which an enemy
          or player must roll on a dice in order for their attack to hit;
          attacking players and enemies must roll that set number or more during
          their turn in order to determine a successful attack.
        </p>
        <p align="center">
          <strong>Your evasion stat's set number is 3 + your AGL score.</strong>
        </p>
      </div>
    ),
  },
  {
    keywords: ["player's handbook", "stats", "dependent", "focus gauge"],
    notation: false,
    header: <></>,
    content: (
      <div>
        <p>
          <strong>Focus Gauge (Focus)</strong> | Focus gauges are used to cast
          special skills and abilities that alter the flow of combat. These are
          broken down into Shotlocks, D-Links, and Special Forms. These will be
          discussed more in a later section. For now, just know that each
          character begins at level 1 with 1 Focus Gauge, and gains another
          maximum Focus Gauge at level 5 and every 10 levels thereafter.
        </p>
      </div>
    ),
  },
  {
    keywords: [
      "player's handbook",
      "stats",
      "buffs",
      "passive",
      "equipment",
      "bonus",
    ],
    notation: false,
    header: <h2>Stat Buffs: Overview</h2>,
    content: (
      <div>
        <p>
          Stats may receive positives and negatives for a few different reasons.
          They come in different types, and each of these types are dictated by
          the source of the buff, and are not arbitrarily chosen. When an
          independent stat is buffed, any dependent stat that is affected by
          that stat is not modified by the new number, but maintains its
          original value. In other words, a bonus that adds 50% to AGL does not
          also increase your EV by the same amount. Only Independent stats can
          be boosted by abilities.
        </p>
        <p>The types of Stat boosts are:</p>
        <br />♥ Passive Bonus (Granted by Passive Abilities)
        <br />♥ Active Bonus (Granted by abilities that have a duration)
        <br />♥ Equipment Bonus (Granted by Accessories)
      </div>
    ),
  },
  {
    keywords: ["player's handbook", "stats", "hp up", "mp up", "items"],
    notation: false,
    header: <h2>HP and MP up</h2>,
    content: (
      <p>
        HP and MP up items can be purchased from the store. Using them increases
        your Max of either one of these stats permanently. You may only use a
        max of 5 of each of these on a given character.
      </p>
    ),
  },
  {
    keywords: ["player's handbook"],
    notation: false,
    header: (
      <div id="title">
        <h1>Actions in Battle</h1>
      </div>
    ),
    content: <></>,
  },
  {
    keywords: [
      "battle",
      "actions",
      "basic attack",
      "guard",
      "cover",
      "items",
      "dodge roll",
      "break",
      "break time",
    ],
    notation: true,
    header: <></>,
    content: (
      <div>
        <p>
          In your post you will describe the actions you are taking, and at the
          end of the post, you’ll include a dice roll that will be modified by
          the appropriate modifiers, for the appropriate skills you are using.
          For the sake of balancing, each turn your character is only allowed
          two actions. Most of the time, these actions will be abilities which
          are all broken down in the Abilities and Focus Abilities section of
          this guide. There are, however, some actions which can be made by
          anyone, and do not cost MP or Focus energy to use.
        </p>
        <ul>
          <li>Perform a Basic Attack with your equipped weapon</li>
          <li>Guard against incoming attacks</li>
          <li>Cover an ally</li>
          <li>Use an Item on yourself or an ally.</li>
          <li>Dodge Roll out of the way of an attack.</li>
          <li>Take a break to quicken the regeneration of your resources.</li>
        </ul>
      </div>
    ),
  },
  {
    keywords: ["battle", "basic attack", "abilities"],
    notation: false,
    header: <h2>Basic Attacks and Abilities</h2>,
    content: (
      <div>
        <p>
          When you make an attack, you’ll need to roll a dice to see if you
          successfully hit the target. To do so, you’ll roll using the dice
          button and list your appropriate modifiers. The roll to hit a target
          is always the same regardless of whether you're using a basic attack
          or an ability. If your roll is greater than or equal to your target's
          EV, you succeed in hitting them, and deal damage.
        </p>
        <p align="center">
          <strong>The roll to hit is 1d10 + your Agility modifier.</strong>
        </p>
        <p align="center" className="codeBlock">
          [roll]1d10+4[/roll]
        </p>
      </div>
    ),
  },
];

export default playerHandbook;
