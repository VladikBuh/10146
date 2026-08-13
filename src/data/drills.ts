import { ImageSourcePropType } from 'react-native';

export type DrillCategory = 'Field Player' | 'Goalkeeper';

export type Drill = {
  id: string;
  teideal: string;
  category: DrillCategory;
  shortDescription: string;
  fad: string;

  difficulty: 'Easy' | 'Medium' | 'Hard';
  paragraphs: string[];
  iomha: ImageSourcePropType;
};

export const cleachtai: Drill[] = [
  {
    id: 'quick-passing-triangle',
    teideal: 'Quick Passing Triangle',
    category: 'Field Player',
    shortDescription: 'Improve passing speed and movement',
    fad: '10 min',
    difficulty: 'Medium',
    iomha: require('../assets/sprintto-drrbl-quick-passing-triangle.png'),
    paragraphs: [
      'Set three cones in a triangle approximately five meters apart. Three players take one position each and pass the ball around the shape. After every pass, the player moves toward the next cone. Encourage quick control and accurate passes with both feet.',
      'Begin at a comfortable pace before introducing one-touch passing. Change the passing direction after several complete rotations. Gradually reduce the distance between the cones to increase difficulty. Perform four rounds of two minutes with short recovery breaks.',
    ],
  },
  {
    id: 'first-touch-gates',
    teideal: 'First Touch Gates',
    category: 'Field Player',
    shortDescription: 'Develop control in tight spaces',
    fad: '12 min',
    difficulty: 'Easy',
    iomha: require('../assets/sprintto-drrbl-first-touch-gates.png'),
    paragraphs: [
      'Create several small gates using pairs of cones across the training area. One player passes the ball while the receiving player controls it through a selected gate. The first touch should move the ball into open space. Players then switch roles after each repetition.',
      'Ask players to scan the area before receiving the pass. Award one point for every controlled touch that passes cleanly through a gate. Reduce the gate width as control improves. Complete three rounds of six successful receptions per player.',
    ],
  },
  {
    id: 'one-two-combination-drill',
    teideal: 'One-Two Combination Drill',
    category: 'Field Player',
    shortDescription: 'Practice fast passing combinations',
    fad: '12 min',
    difficulty: 'Medium',
    iomha: require('../assets/sprintto-drrbl-one-two-combination-drill.png'),
    paragraphs: [
      'Position two players near the edge of the attacking area and place one passive defender between them. The first player passes to a teammate and immediately runs forward for the return ball. The second player completes a quick one-two pass into space. Finish the sequence with a controlled shot on goal.',
      'Begin without defensive pressure to establish the movement pattern. Add an active defender once players understand the timing. Encourage the return pass to be played with one touch. Complete eight repetitions before switching player roles.',
    ],
  },
  {
    id: 'four-corner-possession',
    teideal: 'Four-Corner Possession',
    category: 'Field Player',
    shortDescription: 'Improve awareness and ball retention',
    fad: '15 min',
    difficulty: 'Medium',
    iomha: require('../assets/sprintto-drrbl-four-corner-possession.png'),
    paragraphs: [
      'Mark a square with four cones and place one attacking player near each corner. Add one defender inside the square who attempts to intercept the ball. The attackers must keep possession using short and accurate passes. Players may move along the outside lines to create better passing angles.',
      'Limit attackers to two touches when the exercise becomes too easy. Replace the defender after every interception or thirty seconds of play. Encourage players to communicate before receiving the ball. Perform five rounds with a short break between each round.',
    ],
  },
  {
    id: 'press-and-recover',
    teideal: 'Press and Recover',
    category: 'Field Player',
    shortDescription: 'Build coordinated pressing and recovery',
    fad: '18 min',
    difficulty: 'Hard',
    iomha: require('../assets/sprintto-drrbl-press-and-recover.png'),
    paragraphs: [
      'Divide the area into two horizontal zones and place three attackers against two defenders. The defenders press immediately when the attackers receive the ball. If the press is unsuccessful, both defenders quickly recover into the lower zone. The attackers attempt to carry or pass the ball across the end line.',
      'Focus on the first defender applying pressure while the second protects central space. Defenders should communicate before stepping toward the ball. Rotate players after four attacking attempts. Complete three sets from both sides of the pitch.',
    ],
  },
  {
    id: 'wall-pass-finishing',
    teideal: 'Wall Pass Finishing',
    category: 'Field Player',
    shortDescription: 'Combine movement with accurate finishing',
    fad: '15 min',
    difficulty: 'Medium',
    iomha: require('../assets/sprintto-drrbl-wall-pass-finishing.png'),
    paragraphs: [
      'Place one server near the side of the penalty area and one attacker outside the shooting zone. The attacker passes to the server and immediately runs toward goal. The server returns the ball into the attacker’s path. The attacker finishes using one or two touches.',
      'Alternate between shots with the left and right foot. Move the server to the opposite side after five repetitions. Encourage attackers to aim toward the corners instead of shooting with maximum power. Complete three rounds of ten shots.',
    ],
  },
  {
    id: 'direction-change-dribble',
    teideal: 'Direction Change Dribble',
    category: 'Field Player',
    shortDescription: 'Improve dribbling and quick turns',
    fad: '10 min',
    difficulty: 'Easy',
    iomha: require('../assets/sprintto-drrbl-direction-change-dribble.png'),
    paragraphs: [
      'Arrange six cones in a staggered line with approximately two meters between them. Players dribble through the course while changing direction at every cone. The ball should remain close enough to control without slowing down completely. Players accelerate for several meters after the final cone.',
      'Use the inside and outside of both feet during each run. Introduce a different turn for every round, such as a drag-back or step-over. Time each attempt only after players demonstrate good control. Complete five runs per player with adequate recovery.',
    ],
  },
  {
    id: 'three-zone-transition-game',
    teideal: 'Three-Zone Transition Game',
    category: 'Field Player',
    shortDescription: 'Train fast attacking transitions',
    fad: '15 min',
    difficulty: 'Hard',
    iomha: require('../assets/sprintto-drrbl-three-zone-transition-game.png'),
    paragraphs: [
      'Divide the pitch into three equal zones and place two teams inside the playing area. Each team must complete two passes before moving the ball into the next zone. After winning possession, the team should immediately attack in the opposite direction. Only two players from each team may enter the final zone.',
      'Encourage forward movement as soon as possession changes. Players away from the ball should create width and passing options. Restart quickly whenever the ball leaves the area. Play four rounds of three minutes with one-minute breaks.',
    ],
  },
  {
    id: 'goalkeeper-reaction-saves',
    teideal: 'Goalkeeper Reaction Saves',
    category: 'Goalkeeper',
    shortDescription: 'Improve reactions from short distance',
    fad: '10 min',
    difficulty: 'Medium',
    iomha: require('../assets/sprintto-drrbl-goalkeeper-reaction-saves.png'),
    paragraphs: [
      'Position the goalkeeper in the center of the goal and place the server approximately five meters away. The server holds two balls and releases one without warning. The goalkeeper reacts quickly and attempts to block or catch the ball. Shots should remain controlled and directed within safe reaching distance.',
      'Vary the height and side of each attempt. Encourage the goalkeeper to maintain a balanced starting position. Allow enough recovery time between fast repetitions. Complete three sets of eight saves.',
    ],
  },
  {
    id: 'low-save-technique',
    teideal: 'Low Save Technique',
    category: 'Goalkeeper',
    shortDescription: 'Practice safe low diving saves',
    fad: '12 min',
    difficulty: 'Medium',
    iomha: require('../assets/sprintto-drrbl-low-save-technique.png'),
    paragraphs: [
      'Place two cones approximately three meters apart in front of the goal. The goalkeeper begins in the center while the coach serves low shots toward either cone. The goalkeeper steps toward the ball before lowering the body into the save. Both hands should remain behind the ball whenever possible.',
      'Begin with slow deliveries to develop correct technique. Increase the speed only when the goalkeeper lands safely and maintains control. Alternate sides to avoid overloading one direction. Complete four sets of six saves.',
    ],
  },
  {
    id: 'goalkeeper-distribution-targets',
    teideal: 'Goalkeeper Distribution Targets',
    category: 'Goalkeeper',
    shortDescription: 'Improve accurate throws and passes',
    fad: '15 min',
    difficulty: 'Easy',
    iomha: require('../assets/sprintto-drrbl-goalkeeper-distribution-targets.png'),
    paragraphs: [
      'Set four target zones at different distances from the goalkeeper. The goalkeeper receives the ball and distributes it toward a target selected by the coach. Use underarm throws, overarm throws, and passes from the ground. Each successful delivery into the correct zone earns one point.',
      'Encourage the goalkeeper to look up before releasing the ball. Add light pressure from one approaching player during later rounds. Record the number of successful attempts for each distribution method. Complete three rounds of twelve deliveries.',
    ],
  },
  {
    id: 'close-range-goalkeeper-duel',
    teideal: 'Close-Range Goalkeeper Duel',
    category: 'Goalkeeper',
    shortDescription: 'Develop positioning in one-on-one situations',
    fad: '12 min',
    difficulty: 'Hard',
    iomha: require('../assets/sprintto-drrbl-close-range-goalkeeper-duel.png'),
    paragraphs: [
      'Place an attacker with the ball approximately ten meters from goal. The attacker dribbles forward and attempts to score in a controlled one-on-one situation. The goalkeeper moves forward to reduce the shooting angle. The action ends after the shot, save, or successful interception.',
      'The goalkeeper should remain balanced and avoid going to ground too early. Encourage attackers to vary between shooting and dribbling around the goalkeeper. Reset the exercise after every attempt to maintain safe spacing. Complete ten repetitions before rotating the attacker.',
    ],
  },
];

export const buildDrillShareMessage = (cleachtadh: Drill) =>
  `${cleachtadh.teideal} (${cleachtadh.category}) — ${
    cleachtadh.shortDescription
  }.\n\n${cleachtadh.paragraphs.join('\n\n')}`;
