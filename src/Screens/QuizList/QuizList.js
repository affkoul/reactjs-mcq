import React, { Component } from "react";
import coverPic1 from "../../images/quiz.png";
import coverPic3 from "../../images/scholastic.jpg";
import coverPic5 from "../../images/scholastic.jpg";
import coverPic4 from "../../images/ket.jpg";
import coverPic2 from "../../images/test.png";
import MCQs from "../MCQs/MCQs";

class QuizList extends Component {
  constructor() {
    super();
    this.state = {
      quiz_list: [
        {
          quizName: "周一晚",
          tests: 38,
        },
        {
          quizName: "周三晚",
          tests: 38,
        },
        {
          quizName: "FriEve",
          tests: 38,
        },
        {
          quizName: "SatEve",
          tests: 38,
        },
        {
          quizName: "SunEve",
          tests: 38,
        },
      ],
      quiz_info: [
        {
          quizName: "周一晚",
          tests: [
            {
              name: "March 1, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What did we say was the title of unit 1?",
                  option1:
                    "Changes",
                  option2:
                    "Advancement",
                  option3:
                    "Development",
                  option4:
                    "Expansion",
                  answer: "1",
                },
                {
                  quiz:
                    "How many new vocabulary did we learn?",
                  option1:
                    "8",
                  option2:
                    "16",
                  option3:
                    "24",
                  option4:
                    "48",
                  answer: "2",
                },
                {
                  quiz:
                    "what was the weekly concept of this class?",
                  option1:
                    "Goals",
                  option2:
                    "Perspectives",
                  option3:
                    "Horizons",
                  option4:
                    "Compassion",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "COW music",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About the way a girl's outlook changes when she moves to a new home",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "How do new experiences offer new perspectives?",
                  answer: "4",
                },
                {
                  quiz:
                    "What happened in the first section of the excerpt on page 23 of Reading Writing Workshop?",
                  option1:
                    "It said how Paul was excited about the vacation plan",
                  option2: "It said how Paul was packing for the travel",
                  option3: "Celia and her mom leave for their new house, and Celia expresses how she'll miss her old neighborhood",
                  option4:
                    "It said how Paul was telling his friends about his vacation plan",
                  answer: "3",
                },
                {
                  quiz:
                    "What happened in the second section of the excerpt on page 24 of Reading Writing Workshop?",
                  option1:
                    "It detailed how Paul's parents were reluctant to travel",
                  option2:
                    "It detailed how Paul expressed his anger toward the travel plan",
                  option3:
                    "Celia gets more freedom from her mom, and she eventually meets a music partner, Jason, thereby completly changing her outlook on the country.",
                  option4:
                    "It detailed how Paul came to realize the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  answer: "3",
                },
                {
                  quiz:
                    "What happened in the third section of the excerpt on page 25 of Reading Writing Workshop?",
                  option1:
                    "It talked about the food Uncle Art ordered for dinner and how Paul was attracted by it at first sight",
                  option2:
                    "Celia and Jason went for a duo, and it was a success",
                  option3:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at all",
                  option4:
                    "It talked about the food Uncle Art ordered for dinner and how Paul loved it and devoured it",
                  answer: "2",
                },
              ],
            },
            {
              name: "April 27, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "How do you summarize a story?",
                  option1:
                    "By telling the important events and details in your own words",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "Why do we summarize stories?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "To help us remember what we have read",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "When do we summarize a story?",
                  option1:
                    "We can only summarize the whole story when we finish reading it",
                  option2:
                    "We can summarize the whole story when we finish reading it, or we can summarize parts of the story while reading it",
                  option3:
                    "We can only summarize parts of the story while reading it",
                  option4: "We can summarize the story before reading it",
                  answer: "2",
                },
                {
                  quiz:
                    "In what circumstances were Paul and his family as described on page 167?",
                  option1:
                    "His mom was discussing a vacation plan with him and his dad to go visit his uncle and aunt in Argentina, and Paul was very excited to travel",
                  option2:
                    "His mom was troubled by the vacation plan to go visit his uncle and aunt in Argentina",
                  option3:
                    "His mom was discussing a vacation plan with him to go visit his uncle and aunt in Argentina, but his dad was very reluctant to travel",
                  option4:
                    "His mom was discussing a vacation plan with him and his dad to go visit his uncle and aunt in Argentina, but Paul was very reluctant to travel",
                  answer: "4",
                },
                {
                  quiz:
                    "What were Paul's first night experiences in Buenos Aires like, and what effects did they have on him?",
                  option1:
                    "In the beginning, Paul was in bleak mood, but later started liking the place after realizing some similarities in food culture between his home and Buenos Aires, and coming to learn about the dance and soccer culture in Argentina",
                  option2:
                    "Paul was excited since when they landed in Buenos Aires and that made him like the place",
                  option3:
                    "Paul was excited in the beginning, but later the food in Buenos Aires made him loath the place",
                  option4:
                    "Paul started in bleak mood, and the unacceptable culture in Buenos Aires made him loath the place more",
                  answer: "1",
                },
                {
                  quiz: "What is the theme of a story?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "It is title of a story",
                  option4:
                    "It is the overall idea or message about life that the author wants the reader to know",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a story?",
                  option1: "You can do that by thinking yourself",
                  option2:
                    "You can do that by thinking about what characters say and do, and what happens to them",
                  option3:
                    "You can do that by looking at the last sentence only",
                  option4: "You can do that by looking at the title only",
                  answer: "2",
                },
                {
                  quiz:
                    'What did the characters in "A Reluctant Traveler" say and or do that help conclude to the theme of the story?',
                  option1:
                    "Paul's mom said that they were going to Argentina to visit Paul's uncle and aunt",
                  option2:
                    "Paul's uncle ordered Empanadas for dinner for them on their first night in Argentina",
                  option3:
                    "Paul started saying packing winter clothes in August is weird, but in the end said he might paint his room in soccer team colors after visiting Argentina",
                  option4: "Paul's aunt said she wants to be multilingual",
                  answer: "3",
                },
                {
                  quiz:
                    'What happened to the characters in "A Reluctant Traveler" that help conclude to the theme of the story?',
                  option1: "Paul's family was going to England",
                  option2:
                    "Paul's family was going to Argentina to visit his aunt and uncle and there in Buenos Aires, his aunt and uncle took them to visit the place and learn about the food, dance, and soccer culture over there.",
                  option3: "Paul's family was going to France for vacation",
                  option4:
                    "Paul's family was going to Beijing to visit his aunt and uncle",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "Judge a book by its cover",
                  option2: "Do not judge a book by its cover",
                  option3: "Never read a book",
                  option4: "Do not open your book",
                  answer: "2",
                },
                {
                  quiz: "How did you know the text was realistic fiction?",
                  option1:
                    "The selection talked about characters, Paul and his family and their relatives, and events, Paul's family traveling to Buenos Aires for vacation, that resemble people and events in real life, and it happened in a setting, N.Y. and Argentina, that is real or seemed real, and included dialogues and descriptive details as well",
                  option2: "I just knew it",
                  option3: "My friend told me",
                  option4: "I guessed it",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you say how was any line of dialogue in the story realistic and what does it reveal about the character?",
                  option1:
                    "Where Paul says he wants to go to France sounds real and tells how he is attracted by French culture",
                  option2:
                    "Where Paul's dad is ordering the food while in Argentina sounds real and tells how he is a foodaholic",
                  option3:
                    "Where Paul's mom is talking about the birds in Argentina sounds real and tells how she is attracted by birds",
                  option4:
                    "Where Paul says the food in Buenos Aires was close to that he had at César's home in N.Y. sounds real and tells how he loved eating at César's home",
                  answer: "4",
                },
                {
                  quiz: "What is a dialogue?",
                  option1: "It is some text in the book",
                  option2: "It is what animals say",
                  option3: "It is the exact words that the characters say",
                  option4: "all of the above",
                  answer: "3",
                },
                {
                  quiz: "How do we identify dialogues in a text?",
                  option1: "They are shown using quotation marks",
                  option2: "They are in the end",
                  option3: "They are in the middle",
                  option4: "They are in the beginning",
                  answer: "1",
                },
                {
                  quiz: "How can we identify speakers in dialogues in a text?",
                  option1: "Immediately following a question mark",
                  option2: "A new paragraph indicates a different speaker",
                  option3: "After a period",
                  option4: "Look for the exclamation mark",
                  answer: "2",
                },
                {
                  quiz:
                    "Which cause and effect context clues in the text helped you figure out the meaning of the word hemisphere on page 167 and what was that meaning?",
                  option1:
                    "BECAUSE of the Northern and Southern hemisphere, SO N.Y. and Buenos Aires have opposite seasons. Hence, hemisphere must refer to areas divided by the equator",
                  option2:
                    "BECAUSE of the Northern and Southern hemisphere, SO N.Y. and Buenos Aires have opposite seasons. Hence, hemisphere must refer to areas on different planets",
                  option3:
                    "BECAUSE of the Northern hemisphere, SO N.Y. is far from Buenos Aires. Hence, hemisphere must refer to a place far from us",
                  option4:
                    "BECAUSE of the Southern hemisphere, SO Buenos Aires is cold. Hence, hemisphere must refer to places that are cold",
                  answer: "1",
                },
                {
                  quiz:
                    "Which cause and effect context clues in the text helped you figure out the meaning of the word multilingual on page 168 and what was that meaning?",
                  option1:
                    "BECAUSE Buenos Aires has people from all over the world, SO Paul's aunt Lila said she was happy. Hence, multilingual should mean someone who is happy to see many people",
                  option2:
                    "BECAUSE Buenos Aires has people from all over the world, SO Paul's aunt Lila said she has to be enthusiastic. Hence, multilingual should mean someone who is very energetic",
                  option3:
                    "BECAUSE Buenos Aires has people from all over the world, SO Paul's aunt Lila said she has to be multilingual. Hence, multilingual should mean someone who can speak many languages",
                  option4:
                    "BECAUSE Buenos Aires has very few people, SO Paul said he has to be multilingual. Hence, multilingual should mean someone who can speak only one language",
                  answer: "3",
                },
                {
                  quiz:
                    "Which cause and effect context clues in the text helped you figure out the meaning of the word bleak on page 168 and what was that meaning?",
                  option1:
                    "BECAUSE of the similarity in food taste between N.Y. and Buenos Aires, SO Paul had his bleak mood worsen. Hence, bleak must mean happy state",
                  option2:
                    "BECAUSE of the similarity in food taste between N.Y. and Buenos Aires, SO Paul had his bleak mood improving. Hence, bleak must mean without any enthuse",
                  option3:
                    "BECAUSE of the difference in food taste between N.Y. and Buenos Aires, SO Paul had his bleak mood worsen. Hence, bleak must mean very excited",
                  option4:
                    "BECAUSE of the similarity in food taste between N.Y. and Buenos Aires, SO Paul had his bleak mood improving. Hence, bleak must mean filled with enthuse",
                  answer: "2",
                },
                {
                  quiz:
                    "Which cause and effect context clues in the text helped you figure out the meaning of the word relocated on page 167 and what was that meaning?",
                  option1:
                    "BECAUSE Gorski's sister and her husband have relocated to Buenos Aires for 6 months now, SO Paul's family decided to go visit them. Hence, relocated refers to take the plane to another place and back home again",
                  option2:
                    "BECAUSE Gorski's sister and her husband have relocated to Buenos Aires for 6 months now, SO Paul's family decided to go visit them. Hence, relocated refers to travel to another city or country for vacation",
                  option3:
                    "BECAUSE Gorski's sister and her husband have relocated to Buenos Aires for 6 months now, SO Paul's family decided to not go visit them. Hence, relocated refers to stay in the same city or country",
                  option4:
                    "BECAUSE Gorski's sister and her husband have relocated to Buenos Aires for 6 months now, SO Paul's family decided to go visit them. Hence, relocated refers to move to a new city or country and live there",
                  answer: "4",
                },
                {
                  quiz: "How could you make a dialogue sound realistic?",
                  option1: "Switch between the informal and formal voice",
                  option2: "By using the informal voice only",
                  option3: "By using sentences",
                  option4: "By using phrases",
                  answer: "1",
                },
              ],
            },
            {
              name: "May 5, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What are syllables?",
                  option1: "They're elements of speech",
                  option2: "They're toys",
                  option3: "They're our words",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "How do you syllabicate words?",
                  option1:
                    "Draw a slanted line after each vowel and before the consonant following that vowel",
                  option2: "Draw a slanted line in the beginning of the word",
                  option3: "Draw a slanted line in the end of the word",
                  option4: "Draw a slanted line in the middle of the word",
                  answer: "1",
                },
                {
                  quiz: "What are action verbs?",
                  option1: "They're nouns",
                  option2: "They are verbs that tell the action of the subject",
                  option3: "None of the above",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "What are present-tense verbs?",
                  option1:
                    "They're verbs that show action that may or will happen",
                  option2:
                    "They're verbs that show action that has already happened",
                  option3: "They're verbs that show action that happens now",
                  option4: "None of above",
                  answer: "3",
                },
                {
                  quiz: "What are past-tense verbs?",
                  option1:
                    "They're verbs that show action that may or will happen",
                  option2:
                    "They're verbs that show action that continues over time",
                  option3: "They're verbs that show action that happens now",
                  option4:
                    "They're verbs that show action that has already happened",
                  answer: "4",
                },
                {
                  quiz: "What are future-tense verbs?",
                  option1:
                    "They're verbs that show action that may or will happen",
                  option2:
                    "They're verbs that show action that continues over time",
                  option3: "They're verbs that show action that happens now",
                  option4:
                    "They're verbs that show action that has already happened",
                  answer: "1",
                },
                {
                  quiz: "What are progressive tense verbs?",
                  option1:
                    "They're verbs that show action that may or will happen",
                  option2:
                    "They're verbs that show action that continues over time",
                  option3: "They're verbs that show action that happens now",
                  option4:
                    "They're verbs that show action that has already happened",
                  answer: "2",
                },
                {
                  quiz: "How do you make progressive tense verbs?",
                  option1:
                    'Use the verb "be" with the -ly form of another verb to make the present progressive, past progressive, or future progressive',
                  option2:
                    'Use the verb "be" with the infinitive form of another verb to make the present progressive, past progressive, or future progressive',
                  option3:
                    'Use the verb "be" with the -ed form of another verb to make the present progressive, past progressive, or future progressive',
                  option4:
                    'Use the verb "be" with the -ing form of another verb to make the present progressive, past progressive, or future progressive',
                  answer: "4",
                },
                {
                  quiz: "What is subject-verb agreement?",
                  option1:
                    "This is when a present-tense verb must agree with the subject of the sentence",
                  option2:
                    "This is when a present-tense verb must not agree with the subject of the sentence",
                  option3:
                    "This is when a present-tense verb must agree with the object of the sentence",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How can you write a good narrative text?",
                  option1:
                    "Develop character by adding parts of speech like interjections only",
                  option2:
                    "Switch between the formal and informal voice to make things more realistic only",
                  option3:
                    "Use supporting details from the text to make descriptions, switch between the formal and informal voice to make things more realistic, and develop character by adding parts of speech like interjections",
                  option4:
                    "Use supporting details from the text to make descriptions only",
                  answer: "3",
                },
              ],
            },
            {
              name: "May 11, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "Survivaland",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how four friends use their knowledge of nature to survive",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "2",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How can learning about nature be useful?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did the four friends used their knowledge of nature to get out of dangerous situations?",
                  option1:
                    "Latrice used her knowledge of sunrise to find the West direction, Raul used his knowledge about insects to get rid of the gigantic butterfly, and Juanita used her knowledge of crows to deviate the huge crow from them.",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you summarize a story?",
                  option1:
                    "By deciding which details are most important and retelling them in our own words",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "How do you decide which details are most important",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "By asking yourself if they help you understand what is happening",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "Why do we summarize stories?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "To help us remember what we read",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the most important details about the outcome of Survivaland?",
                  option1:
                    "Sunrise helped find West direction, insects strangeness helped find how to fight the gigantic butterfly, and crows preferences were used to get rid of the huge hungry crow",
                  option2:
                    "The four friends went to Survivaland, they had fun, and they got out",
                  option3:
                    "The four friends went to Survivaland, they had fun, and they didn't make it back",
                  option4:
                    "The four friends went into the game, they had fun, and they got out",
                  answer: "1",
                },
                {
                  quiz: "What is the theme of a story?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "It is title of a story",
                  option4:
                    "It is the message about life that the author thinks is important",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a story?",
                  option1: "You can do that by thinking yourself",
                  option2:
                    "You can do that by thinking about what characters say and do, and what happens to them",
                  option3:
                    "You can do that by looking at the last sentence only",
                  option4: "You can do that by looking at the title only",
                  answer: "2",
                },
                {
                  quiz:
                    'What did the characters in "Survivaland" say and or do that help conclude to the theme of the story?',
                  option1:
                    "Paul's mom said that they were going to Argentina to visit Paul's uncle and aunt",
                  option2:
                    "Paul's uncle ordered Empanadas for dinner for them on their first night in Argentina",
                  option3:
                    "Latrice knows the sun rises in the east, so she figures out that west is in the opposite direction, Raul remembered insects taste with their feet so he asked Juanita to rub onions on herself to irritate and drive away the gigantic butterfly, and Juanita knew crows are attracted to shiny stuffs so she dumped her jewels in their opposite direction to get safe",
                  option4: "Paul's aunt said she wants to be multilingual",
                  answer: "3",
                },
                {
                  quiz:
                    'What happened to the characters in "Survivaland" that help conclude to the theme of the story?',
                  option1: "Paul's family was going to England",
                  option2:
                    "The characters run west to safety, the giant butterfly ran away, and the crow followed the jewels and left them",
                  option3: "Paul's family was going to France for vacation",
                  option4:
                    "Paul's family was going to Beijing to visit his aunt and uncle",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "There's always a way out!",
                  option2: "Do not judge a book by its cover",
                  option3: "Never read a book",
                  option4: "Do not open your book",
                  answer: "1",
                },
                {
                  quiz: "How did you know that text was fantasy?",
                  option1:
                    "The selection had a made-up setting, where the four friends suddenly traveled into the game, which is not possible in real life, and it included imaginary characters like the gigantic butterfly and the huge crow and events like when they rubbed their faces and suddenly came back to the normal world are things that do not exist in real life",
                  option2: "I just knew it",
                  option3: "My friend told me",
                  option4: "I guessed it",
                  answer: "1",
                },
                {
                  quiz: "What are other features of a fantasy text genre?",
                  option1:
                    "Where Paul says he wants to go to France sounds real and tells how he is attracted by French culture",
                  option2:
                    "Where Paul's dad is ordering the food while in Argentina sounds real and tells how he is a foodaholic",
                  option3:
                    "Where Paul's mom is talking about the birds in Argentina sounds real and tells how she is attracted by birds",
                  option4:
                    "May include sensory language and or personification",
                  answer: "4",
                },
                {
                  quiz: "What is sensory language?",
                  option1: "It is some text in the book",
                  option2: "It is what animals say",
                  option3:
                    "It is language that involves the five senses: touch, sight, taste, sound, smell",
                  option4: "all of the above",
                  answer: "3",
                },
                {
                  quiz: "What is personification?",
                  option1:
                    "Personification gives human qualities to objects or animals",
                  option2: "They are in the end",
                  option3: "They are in the middle",
                  option4: "They are in the beginning",
                  answer: "1",
                },
                {
                  quiz:
                    "Which one is an example of sensory language and personification that was found in the text?",
                  option1: "Immediately following a question mark",
                  option2:
                    "The phrase onion bitterness is sensory language, and the crow announcing he is hungry is personification",
                  option3: "After a period",
                  option4: "Look for the exclamation mark",
                  answer: "2",
                },
                {
                  quiz:
                    "Which COMPARISONS context clues in the text helped you figure out the meaning of the unfamiliar or multiple meaning word immobile on page 181 and what was that meaning?",
                  option1:
                    "The COMPARISONS suddenly sprang into action and raced across help figure out the meaning of immobile. It must mean the opposite, not moving",
                  option2:
                    "The COMPARISONS sun is rising and sets in the west help figure out the meaning of ascends. It must mean the opposite of sets, going up",
                  option3:
                    "The COMPARISONS fly down and land on help figure out the meaning of hovering. It must mean the opposite, remain in place in the air",
                  option4:
                    "The COMPARISONS huh? and confused help figure out the meaning of perplexed. It must mean the same, very confused",
                  answer: "1",
                },
              ],
            },
            {
              name: "May 18, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Patterns of Change",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can learning about different cultures teach us?",
                  option4: "Where can we find patterns in nature?",
                  answer: "4",
                },
                {
                  quiz: "What are the two kinds of Igneous Rocks we learned?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "Granite and Obsidian",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What patterns can we find in Igneous Rocks?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "Tessellations",
                  answer: "4",
                },
                {
                  quiz:
                    "What are the three kinds of Sedimentary Rocks we learned?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2: "Sandstone, Limestone, and Strata",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What patterns can we find in Sedimentary Rocks?",
                  option1: "Repetition of lines and layers",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is the first stage of The Rock Cycle?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "Sediment",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "Squeezing and cementing of sediment forms ...",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Sedimentary Rock",
                  answer: "4",
                },
              ],
            },
            {
              name: "May 25, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What patterns are found in sedimentary rocks?",
                  option1: "Limestone, Marble, and Sandstone",
                  option2: "Granite and Obsidian",
                  option3: "Blackstone, Whitestone and Cactus",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Where can we see the patterns found in sedimentary rocks?",
                  option1: "In the sky",
                  option2: "In deserts or sea and beaches or riverbanks",
                  option3: "In the house",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do rocks change?",
                  option1: "They move from one place to another",
                  option2: "They get transported by people",
                  option3:
                    "Water, wind, and temperature over long periods of time erode and change them, and even shape and sketch designs on them",
                  option4: "They turn into plants and other living things",
                  answer: "3",
                },
                {
                  quiz: "How are Igneous rocks formed?",
                  option1:
                    "They are formed after the wind blows trees down and those trees decay and accumulate to form Igneous rock.",
                  option2:
                    "They are formed after hard rocks get crushed by people as they walk on it and eventually split into Igneous rock.",
                  option3:
                    "They are formed after hot gas far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually turns into crystals of Igneous rock.",
                  option4:
                    "They are formed after hot liquid rock called magma or lava far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually slowly cools to form crystals of Igneous rock.",
                  answer: "4",
                },
                {
                  quiz:
                    'What was the main idea of the section "Sedimentary Rocks" on page 196 of Reading Writing Workshop?',
                  option1: "Sedimentary rocks could be used as soccer balls",
                  option2: "Air will get compressed into sedimentary rocks",
                  option3:
                    "Particles such as sand or bones and shells form different sedimentary rocks",
                  option4: "Sedimentary rocks are extremely hard",
                  answer: "3",
                },
                {
                  quiz:
                    'What was the main idea of the section "Rock Formations" on page 196 of Reading Writing Workshop?',
                  option1: "Rock formations are so beautiful",
                  option2:
                    "Layers of sedimentary rock create different rock formations",
                  option3: "Rock formations are very rare and scarce",
                  option4:
                    "Soil particles accumulate in the air to create rock formations",
                  answer: "2",
                },
                {
                  quiz:
                    'How did you know the selection "Patterns of Change" was an expository text?',
                  option1:
                    "It provided evidence and gave reasons why patterns occur, supported them with facts and concrete details, and included diagrams that illustrated information",
                  option2:
                    "It had imaginary characters that couldn't exist in real life",
                  option3:
                    "The setting was all made-up and the events were too unrealistic",
                  option4: "It had hero with a set of tasks to accomplish",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "geo"?',
                  option1: "Earth",
                  option2: "Sun",
                  option3: "Moon",
                  option4: "Water",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "logy"?',
                  option1: "Eat",
                  option2: "Life",
                  option3: "Play",
                  option4: "Study",
                  answer: "4",
                },
                {
                  quiz: 'What is the meaning of the greek root "chrono"?',
                  option1: "Pet",
                  option2: "History",
                  option3: "Time",
                  option4: "Fast",
                  answer: "3",
                },
              ],
            },
            {
              name: "June 8, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 15, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "5",
                  option4: "8",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "1",
                },
                {
                  quiz:
                    "What did the historians find by studying the ancient quipu?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "Some said it was a calculator and others said it was a language",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "3",
                },
                {
                  quiz: "When do you summarize a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "As you read and or in the end",
                  option3: "Only as you read",
                  option4: "Only in the end",
                  answer: "2",
                },
                {
                  quiz: "What was each author's point of view?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "4",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Same sentence context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "r-controlled vowel syllables",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "Irregular verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How are irregular verbs special?",
                  option1: "They are not",
                  option2: "They link the subject and a word in the predicate",
                  option3: "They help the main verb",
                  option4:
                    "They do not end in -ed to form the past tense and have special spellings when used with have in the perfect or progressive tenses",
                  answer: "4",
                },
                {
                  quiz:
                    "How do you spell the irregular verb ride when used with have?",
                  option1: "Have ride",
                  option2: "Have rode",
                  option3: "Have ridden",
                  option4: "Have rid",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you spell the irregular verb take when used with have?",
                  option1: "Have taken",
                  option2: "Have take",
                  option3: "Have took",
                  option4: "Have taked",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you spell the irregular verb be when used with have?",
                  option1: "Have be",
                  option2: "Have been",
                  option3: "Have is",
                  option4: "Have was",
                  answer: "2",
                },
                {
                  quiz:
                    "How do you spell the irregular verb begin when used with have?",
                  option1: "Have begin",
                  option2: "Have began",
                  option3: "Have begun",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you spell the irregular verb come when used with have?",
                  option1: "Have come",
                  option2: "Have came",
                  option3: "Have camed",
                  option4: "Have comed",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you spell the irregular verb do when used with have?",
                  option1: "Have do",
                  option2: "Have did",
                  option3: "Have done",
                  option4: "Have doed",
                  answer: "3",
                },
                {
                  quiz: "How do you write a good informative essay?",
                  option1:
                    "Use precise language, use transitions, and include reasons and evidence",
                  option2: "Write many conclusions",
                  option3: "Write many meaningless details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 22, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was Unit 4 about?",
                  option1: "How do we explore plants?",
                  option2: "How do we go to school?",
                  option3: "How do we decide what is important?",
                  option4: "How do we ride a bike?",
                  answer: "3",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Praying",
                  option2: "Sharing Stories",
                  option3: "Dancing",
                  option4: "Learning to cook",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "What can we do to improve our reading",
                  option2: "What are the kinds of tales?",
                  option3:
                    "What kinds of stories do we tell and why do we tell them?",
                  option4: "What can we bring to a picnic",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn?",
                  option1: "8",
                  option2: "10",
                  option3: "12",
                  option4: "14",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story we read last class?",
                  option1: "Types of Rocks",
                  option2: "Plants and Nature",
                  option3: "How Mighty Kate Stopped the Train",
                  option4: "A devised plan",
                  answer: "3",
                },
                {
                  quiz: "What was the story about?",
                  option1: "About a girl collecting plants",
                  option2: "About four friends playing a game",
                  option3: "About a heroic young girl who saves the day",
                  option4: "About types of rocks",
                  answer: "3",
                },
                {
                  quiz: "How did the author tell the story?",
                  option1: "In a dull way",
                  option2: "In a fantastic way",
                  option3: "In an angry way",
                  option4: "In a rushed way",
                  answer: "2",
                },
                {
                  quiz: "Why did the author tell the story that way?",
                  option1: "To tell the reader what to do",
                  option2: "To catch the reader's attention",
                  option3: "To drive away the reader",
                  option4: "To make the story sound scary",
                  answer: "2",
                },
                {
                  quiz: "How did you know the story was a Tall Tale?",
                  option1: "It had a larger-than-life character, Kate",
                  option2:
                    "It described events that couldn't happen in real life such as the author said Kate's whistle traveled kilometers",
                  option3:
                    "It had humorous exaggeration and hyperbole where Kate yanked up workers in distress with one hand",
                  option4: "All of the above",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 29, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4: "How to pronounce diphthongs",
                  answer: "3",
                },
                {
                  quiz: "What are pronouns?",
                  option1: "They are common nouns",
                  option2: "They are words that replace nouns",
                  option3: "They are nouns",
                  option4: "They are verbs",
                  answer: "2",
                },
                {
                  quiz: "What are antecedents?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are words that pronouns replace",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are indefinite pronouns?",
                  option1:
                    "They are pronouns that are in the middle of the sentence",
                  option2:
                    "They are pronouns that are in the end of the sentence",
                  option3:
                    "They are pronouns that are in the beginning of the sentence",
                  option4:
                    "They are pronouns that refer to something or someone not specific",
                  answer: "4",
                },
                {
                  quiz: "What is pronoun-antecedent agreement?",
                  option1: "They must match in gender only",
                  option2: "They must match in number only",
                  option3: "They must match in number and gender",
                  option4: "They must match in agreement",
                  answer: "3",
                },
                {
                  quiz:
                    "What kind of text did we practice to write last class?",
                  option1: "Poem",
                  option2: "Opinion essay",
                  option3: "Narrative text",
                  option4: "Informative text",
                  answer: "3",
                },
                {
                  quiz: "Which is a way to make a narrative text fun?",
                  option1: "Use formal voice",
                  option2: "Use informal voice",
                  option3: "Use transition words",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you describe scenes precisely?",
                  option1: "By using many words",
                  option2: "By using sensory details",
                  option3: "By using verbs",
                  option4: "By using nouns",
                  answer: "2",
                },
                {
                  quiz: "How do you reinforce ideas in a narrative text?",
                  option1: "By changing the style and tone",
                  option2: "By using more words",
                  option3: "By using sensory details",
                  option4: "By using figurative language",
                  answer: "4",
                },
                {
                  quiz: "What narrative text did we write last class?",
                  option1: "Where Kate whistled",
                  option2: "Where Kate tossed a boulder",
                  option3: "Where Kate wrung the wet log",
                  option4: "Where babe Kate picked up her doc",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 13, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Drama",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "Where's Brownie?",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About kids who piece together clues to find a missing pet",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "2",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can you discover when you give things a second look?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How do Alex's and Evan's observations help them find Brownie?",
                  option1:
                    "They learn that chameleons change color with their environments, so look for possible different-color Brownie",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you do to better understand a play?",
                  option1:
                    "By visualizing the scene descriptions, characters, settings, and actions",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "In a play, who do you call a speaker?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "A character who delivers a particular line of dialogue from his or her own point of view",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "In a play, who do you call a narrator?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "One who provides information from a point outside the main action of the play",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What features make a mystery play?",
                  option1:
                    "Center on a mystery that must be solved using clues, is made up mostly of dialogue among the characters, and contain scenes, setting details, and stage directions ",
                  option2:
                    "The four friends went to Survivaland, they had fun, and they got out",
                  option3:
                    "The four friends went to Survivaland, they had fun, and they didn't make it back",
                  option4:
                    "The four friends went into the game, they had fun, and they got out",
                  answer: "1",
                },
                {
                  quiz: "What are adages and proverbs?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "They are sayings that are often repeated",
                  option4:
                    "It is the message about life that the author thinks is important",
                  answer: "3",
                },
              ],
            },
            {
              name: "July 20, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What did we learn about prefixes last class?",
                  option1: "How they change the stress in words",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "Why did we learn how they change the stress in words?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "To increase our reading fluency",
                  answer: "4",
                },
                {
                  quiz: "How many pronouns did we learn about last class",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What were they?",
                  option1: "Goalie, Dancing, Eating, and Running pronouns",
                  option2: "Happy, Sad, Angry, and Sleepy pronouns",
                  option3: "Subject, Object, Reflexive, and Relative pronouns",
                  option4: "Cars, Bikes, School, and Book pronouns",
                  answer: "3",
                },
                {
                  quiz:
                    "What is the main difference between a subject pronoun and an object pronoun?",
                  option1:
                    "A subject pronoun comes before the verb, but an object pronoun comes after the verb",
                  option2:
                    "A subject pronoun comes after the verb, but an object pronoun comes before the verb",
                  option3:
                    "A subject pronoun is placed in the middle of the sentence, but an object pronoun is placed in the beginning of the sentence",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a reflexive pronoun?",
                  option1:
                    "It is one that tells what one does for or to oneself",
                  option2: "It is one that tells what oneself is doing",
                  option3: "It is one that tells what oneself is not doing",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a relative pronoun?",
                  option1:
                    "It is one that replaces the antecedent and tells more about that antecedent",
                  option2: "It is one that replaces the antecedent only",
                  option3:
                    "It is one that tells more about the antecedent only",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How do we use commas with quotes in a dialogue?",
                  option1:
                    "We put commas outside the opening quotation marks but inside the closing quotation marks",
                  option2:
                    "We put commas inside the opening quotation marks but outside the closing quotation marks",
                  option3:
                    "We put commas outside the opening quotation marks and outside the closing quotation marks",
                  option4:
                    "We put commas inside the opening quotation marks and inside the closing quotation marks",
                  answer: "1",
                },
                {
                  quiz: "How do we use quotation marks in a dialogue?",
                  option1:
                    "We use them before and after the exact words that a speaker says or writes",
                  option2:
                    "We use them only before the exact words that a speaker says or writes",
                  option3:
                    "We use them only after the exact words that a speaker says or writes",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What is the first thing to write when writing a scene?",
                  option1: "The dialogue",
                  option2: "The setting",
                  option3: "The scene number",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "July 27, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Take Action",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3:
                    "What can people do to bring about a positive change?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "20",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About what Frederick Douglass did to bring about a positive change for African Americans",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "2",
                },
                {
                  quiz:
                    "What did Frederick Douglass do to bring about a positive change for African Americans?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "Some said it was a calculator and others said it was a language",
                  option4:
                    "Spoke against slavery, exposed the horrors of slavery, wrote a book, started his own abolitionist newspaper, and worked tirelessly to end segregation.",
                  answer: "4",
                },
                {
                  quiz: "What should summaries say?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "As you read and or in the end",
                  option3: "Only what is in the text",
                  option4: "Only in the end",
                  answer: "3",
                },
                {
                  quiz: "How do you find the author's point of view?",
                  option1:
                    "By finding the key details of each section of the text and summarizing what do they have in common",
                  option2: "To be happy",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "1",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It told facts about the life of Fredrick Douglass, described its talents and achievements, and was written in logical order",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between a prefix and a suffix?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3:
                    "A prefix is a word part added to the beginning of another word to change its meaning, meanwhile a suffix is added to the end",
                  option4: "Paragraph clues",
                  answer: "3",
                },
              ],
            },
            {
              name: "August 3, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What did we learn about homographs last class?",
                  option1: "They are spelled the same",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What else did we learn about homographs last class?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "May sound the same or not",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the last thing we learned about homographs last class?",
                  option1: "Differ in meaning",
                  option2: "Must be different words",
                  option3: "Have the same meaning",
                  option4: "Always sound the same",
                  answer: "1",
                },
                {
                  quiz: "How do pronouns and verbs agree?",
                  option1: "They never agree in any ways",
                  option2: "They don't need to agree",
                  option3: "They agree in number and gender",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you form pronoun-verb contractions?",
                  option1:
                    "By putting a pronoun and verb together and using an apostrophe to replace the omitted letters",
                  option2:
                    "By putting a pronoun and verb together and leaving no letter out",
                  option3: "By replacing a pronoun with a verb together",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "Can you abbreviate state names on envelopes?",
                  option1: "Yes",
                  option2: "No",
                  option3: "Never",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods on abbreviations that are read like words?",
                  option1: "No",
                  option2: "Yes",
                  option3: "Always",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods with abbreviations of measure units in the metric system?",
                  option1: "No",
                  option2: "Sometimes",
                  option3: "Yes",
                  option4: "Always",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you double the period at the end of a sentence ending with an abbreviation?",
                  option1: "No",
                  option2: "Always",
                  option3: "Sometimes",
                  option4: "Yes",
                  answer: "1",
                },
                {
                  quiz: "How do you write a good informative text?",
                  option1: "Use repetition, rhyme, and stanzas",
                  option2:
                    "Use figurative language, informal voice, and dialogue",
                  option3:
                    "Develop the topic, use logical order text structure, and finish with a strong conclusion",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "August 10, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Consider Our Resources",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3: "Why are natural resources valuable?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "14",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4: "About the ways natural resources provide energy?",
                  answer: "1",
                },
                {
                  quiz: "How are natural resources valuable?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "The sun helps heat our planet, coal is burned to heat our homes, and oil is transformed into gasoline to power our cars",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "3",
                },
                {
                  quiz:
                    "What ways did the text suggest that individuals can save energy?",
                  option1:
                    "By asking and answering questions about those details",
                  option2:
                    "Turning off lights, TVs, computers, and other devices when they are not using them",
                  option3: "Only as you read",
                  option4: "Only in the end",
                  answer: "2",
                },
                {
                  quiz:
                    "What are some of the things you said you could do personally to save energy?",
                  option1: "To help us read well",
                  option2: "Use less appliances",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It explained why natural resources are valuable, presented information in logical order, and presented them in a chart",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2:
                    "Surrounding definition and restatement context clues",
                  option3: "Same sentence context clues",
                  option4: "Paragraph clues",
                  answer: "2",
                },
                {
                  quiz: "What sound did we learn to read last class?",
                  option1: "Open syllable",
                  option2: "r-controlled vowel syllables",
                  option3: "Closed syllable",
                  option4:
                    "The sound of the letters ture, cher, tcher, and zure",
                  answer: "4",
                },
                {
                  quiz: "What kind of pronouns did we learn last class?",
                  option1: "Irregular verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "Possessive pronouns and reflexive pronouns",
                  answer: "4",
                },
                {
                  quiz: "What did we say about apostrophes?",
                  option1:
                    "They are used in dialogues, making the possessive, and contractions",
                  option2: "They link the subject and a word in the predicate",
                  option3: "They help the main verb",
                  option4:
                    "They do not end in -ed to form the past tense and have special spellings when used with have in the perfect or progressive tenses",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about summarizing a text?",
                  option1: "Have ride",
                  option2:
                    "We said we use the most important ideas from the text and do not include our own opinions",
                  option3: "Have ridden",
                  option4: "Have rid",
                  answer: "2",
                },
                {
                  quiz:
                    "What did we learn about how to find the author's point of view?",
                  option1: "Pay attention to the words that the author chose",
                  option2: "Have take",
                  option3: "Have took",
                  option4: "Have taked",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about writing an opinion essay?",
                  option1: "Have be",
                  option2:
                    "It should start with a strong opening, provide reasons and evidence, and use transitions",
                  option3: "Have is",
                  option4: "Have was",
                  answer: "2",
                },
                {
                  quiz: "Which of the following are reflexive pronouns?",
                  option1: "Him, her, and them",
                  option2: "He, she, and it",
                  option3: "Myself, hisself, and yourself",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come before the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "Hers and his",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come after the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "We and they",
                  answer: "3",
                },
                {
                  quiz: "What is the use of a chart?",
                  option1:
                    "Use precise language, use transitions, and include reasons and evidence",
                  option2: "Write many conclusions",
                  option3:
                    "It represents facts visually to allow readers to compare and contrast information",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "August 17, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Making It Happen",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3: "How do you prepare for a picnic?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "4",
                },
                {
                  quiz: "What is a lyric poetry?",
                  option1: "It is a poem that contains rhyme and alliteration",
                  option2: "It is a short poem",
                  option3: "It is a poem that tells a story",
                  option4: "It is a long poem",
                  answer: "1",
                },
                {
                  quiz: "What is a free verse?",
                  option1: "It is a poem that tells a story",
                  option2: "It is a long poem",
                  option3: "It is a short poem",
                  option4:
                    "It is a poem that has no rhyming pattern, meter or line length",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a poem?",
                  option1:
                    "It is the repeated use of words, sounds or phrases for effect or emphasis",
                  option2: "It is the repeated use of punctuations",
                  option3: "By identifying poetic elements and key details",
                  option4: "It is the repeated use of the same title",
                  answer: "3",
                },
                {
                  quiz: "What is rhyme in poetry?",
                  option1: "It is the repetition of the same consonant sound",
                  option2: "It is the repetition of the same vowel sound",
                  option3: "It is the repetition of the same word",
                  option4: "It is the repetition of the same letter",
                  answer: "2",
                },
                {
                  quiz: "What is alliteration?",
                  option1:
                    "They're words that are spelled the same and have the same meaning",
                  option2:
                    "It is the presence of the same consonant sound in the beginning of two or more words",
                  option3:
                    "They're words that are spelled the same but have different meanings and may or may not have the same pronunciation",
                  option4:
                    "They're words that are not spelled the same but have the same meaning",
                  answer: "2",
                },
                {
                  quiz: "What is meter in poetry?",
                  option1:
                    "It is the rhythm or regular pattern of sounds in a line",
                  option2: "It's the same as its denotation",
                  option3: "Guess it from its letters",
                  option4: "Use context clues to figure out the meaning",
                  answer: "1",
                },
                {
                  quiz: "What is stanza in poetry?",
                  option1: "Foreshadowing and Imagery",
                  option2: "Effect and Emphasis",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between simile and metaphor?",
                  option1: "In unity there's strength",
                  option2: "It takes two to tango",
                  option3: "Hope is the source of life",
                  option4:
                    "Simile uses words like or as to make a comparison, but metaphor makes a comparison without them",
                  answer: "4",
                },
              ],
            },
            {
              name: "August 24, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce -ance and -ence, and how to use its meaning to find the meaning a word derived by adding any of them to it.",
                  answer: "4",
                },
                {
                  quiz: "What are pronouns?",
                  option1: "They are common nouns",
                  option2: "They are words that replace nouns",
                  option3: "They are nouns",
                  option4: "They are verbs",
                  answer: "2",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3:
                    "They are words that sound the same, but spelled differently",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "How do you punctuate a poem?",
                  option1:
                    "They are pronouns that are in the middle of the sentence",
                  option2:
                    "They are pronouns that are in the end of the sentence",
                  option3:
                    "They are pronouns that are in the beginning of the sentence",
                  option4:
                    "Use a period to tell the reader to stop, a comma to pause, and no punctuation to let the reader keep reading",
                  answer: "4",
                },
                {
                  quiz: "How do you write a good poem?",
                  option1: "They must match in gender only",
                  option2: "They must match in number only",
                  option3:
                    "Use sensory language, add supporting details, and include alliteration to change style and tone",
                  option4: "They must match in agreement",
                  answer: "3",
                },
                {
                  quiz: "What is sensory language?",
                  option1: "Poem",
                  option2: "Opinion essay",
                  option3: "Narrative text",
                  option4:
                    "Vivid words that help create a concrete image in the readers' minds",
                  answer: "4",
                },
                {
                  quiz:
                    "What kind of supporting details do you write in a poem?",
                  option1: "Use formal voice",
                  option2:
                    "Descriptive adjectives to help readers visualize the events and setting",
                  option3: "Use transition words",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "Which is an example of alliteration?",
                  option1: "Fluffy foam",
                  option2: "Fabulous flowers",
                  option3: "Gone games",
                  option4: "All of the above",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the weekly concept of the first lesson of Unit 5?",
                  option1: "Playing outside",
                  option2: "Running in the bush",
                  option3: "A plan of action",
                  option4: "New Perspectives",
                  answer: "4",
                },
                {
                  quiz:
                    "What essential question did the first lesson of Unit 5 want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "3",
                },
              ],
            },
            {
              name: "August 31, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What did we learn about homographs last class?",
                  option1: "They are spelled the same",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What else did we learn about homographs last class?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "May sound the same or not",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the last thing we learned about homographs last class?",
                  option1: "Differ in meaning",
                  option2: "Must be different words",
                  option3: "Have the same meaning",
                  option4: "Always sound the same",
                  answer: "1",
                },
                {
                  quiz: "How do pronouns and verbs agree?",
                  option1: "They never agree in any ways",
                  option2: "They don't need to agree",
                  option3: "They agree in number and gender",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you form pronoun-verb contractions?",
                  option1:
                    "By putting a pronoun and verb together and using an apostrophe to replace the omitted letters",
                  option2:
                    "By putting a pronoun and verb together and leaving no letter out",
                  option3: "By replacing a pronoun with a verb together",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "Can you abbreviate state names on envelopes?",
                  option1: "Yes",
                  option2: "No",
                  option3: "Never",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods on abbreviations that are read like words?",
                  option1: "No",
                  option2: "Yes",
                  option3: "Always",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods with abbreviations of measure units in the metric system?",
                  option1: "No",
                  option2: "Sometimes",
                  option3: "Yes",
                  option4: "Always",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you double the period at the end of a sentence ending with an abbreviation?",
                  option1: "No",
                  option2: "Always",
                  option3: "Sometimes",
                  option4: "Yes",
                  answer: "1",
                },
                {
                  quiz: "How do you write a good informative text?",
                  option1: "Use repetition, rhyme, and stanzas",
                  option2:
                    "Use figurative language, informal voice, and dialogue",
                  option3:
                    "Develop the topic, use logical order text structure, and finish with a strong conclusion",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 7, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "4",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "3",
                },
                {
                  quiz: "How did Miguel change after entering Middle School?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What caused him to change?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "He became friend with Jake",
                  answer: "4",
                },
                {
                  quiz:
                    "How can making predictions help us better understand the text?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What can you compare and contrast in a story?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is Realistic Fiction?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3:
                    "It is where characters and settings may actually exist in real life",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "What context clues did we talk about in the class?",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Comparisons",
                  answer: "4",
                },
              ],
            },
            {
              name: "September 14, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce the suffixes less, ist, ion, and ful, and how to use their meaning to infer unfamiliar words based of them",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix less?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the suffix ist?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means person who studies",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the suffix ion?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means the act of",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix ful?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means full of",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What did we learn under grammar last class?",
                  option1: "Adjectives",
                  option2: "Present tense verbs",
                  option3: "Pronouns",
                  option4:
                    "Independent and dependent clauses, and appositives and commas",
                  answer: "4",
                },
                {
                  quiz:
                    "What is the difference between an independent clause and a dependent clause?",
                  option1:
                    "The former has many words but the latter has few words",
                  option2:
                    "The former can stand on its own meanwhile the latter cannot",
                  option3: "The former is a clause but the other is not",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "What is the relationship between appositives and commas?",
                  option1:
                    "Commas appear before and immediately after appositives",
                  option2: "Commas only appear before appositives",
                  option3: "Commas only appear after appositives",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing opening linking word?",
                  option1: "As you can see",
                  option2: "Lastly",
                  option3: "First",
                  option4: "I believe",
                  answer: "4",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing closing linking word?",
                  option1: "As you can see",
                  option2: "Third",
                  option3: "Also",
                  option4: "The next",
                  answer: "1",
                },
              ],
            },
            {
              name: "September 21, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "3",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "16",
                  answer: "1",
                },
                {
                  quiz: "How is making predictions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us read with purpose",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast characters.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is realistic fiction?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it features events and settings typical of the time period in which the story is set",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is an idiom?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is an expression that cannot be defined by the words in it",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3:
                    "They are words that sound the same, but are spelled differently and have different meaning",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What is a dependent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an independent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "September 28, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Our Changing Earth",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "What changes in the environment affect living things?",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "4",
                },
                {
                  quiz:
                    "How is asking and answering questions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast ideas.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is expository text?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is a graph?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are photographs?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are captions?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "They are words that add information to a photograph",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: 'What is the meaning of the prefix "dis"?',
                  option1: "It means not or absence of or opposite of",
                  option2: "It means before",
                  option3: "It means wrong",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "October 12, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "CHANGING VIEWS OF EARTH",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About how our understanding of Earth has changed along with scientific developments over time",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "How can scientific knowledge change over time?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz:
                    "What was the effect of flight on our knowledge about Earth?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4:
                    "Permitted to launch satellites in space to achieve new breakthroughs",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Helps stay focused",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you call cause and effect events where the effect of the previous event is the cause of the current one?",
                  option1: "Cause-Effect Chain",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "1",
                },
                {
                  quiz: "What is a diagram?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3:
                    "It’s a drawing that shows the different parts of something and how they relate to each other",
                  option4: "Repetition of shoes and cars",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "geo"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Earth",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "helio"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Sun",
                  option4: "Igneous Rock",
                  answer: "3",
                },
              ],
            },
            {
              name: "October 19, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce the suffixes less and ness, and how to use their meaning to infer unfamiliar words based of them",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix less?",
                  option1: "It means together",
                  option2: "It means without or no",
                  option3: "It means all",
                  option4: "It means above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the suffix ness?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means state of being",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "How do you form a comparative adjective?",
                  option1: "By adding the word and or the ending -es",
                  option2: "By adding the word is or the ending -ing",
                  option3: "By adding the word the or the ending -ed",
                  option4: "By adding the word more or the ending -er",
                  answer: "4",
                },
                {
                  quiz: "How do you form a superlative adjective?",
                  option1: "By adding the word and or the ending -es",
                  option2: "By adding the word is or the ending -ing",
                  option3: "By adding the word most or the ending -est",
                  option4: "By adding the word more or the ending -er",
                  answer: "3",
                },
                {
                  quiz:
                    "If an adjective ends in a consonant and y, how to add -er or -est?",
                  option1: "Change the y to t before adding -er or -est",
                  option2: "Change the y to s before adding -er or -est",
                  option3: "Change the y to e before adding -er or -est",
                  option4: "Change the y to i before adding -er or -est",
                  answer: "4",
                },
                {
                  quiz: "If an adjective ends in e, how to add -er or -est?",
                  option1: "Add another e before adding -er or -est",
                  option2: "Drop the e before adding -er or -est",
                  option3: "Add an s before adding -er or -est",
                  option4: "Add an i before adding -er or -est",
                  answer: "2",
                },
                {
                  quiz:
                    "If an adjective has a single vowel before a final consonant, how to add -er or -est?",
                  option1:
                    "Double the final consonant before adding -er or -est",
                  option2: "Drop the final consonant before adding -er or -est",
                  option3:
                    "Drop the final consonant and the letter before it before adding -er or -est",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "Use more, better and worse to compare .........?",
                  option1: "Five people, places, or things",
                  option2: "Four people, places, or things",
                  option3: "Three people, places, or things",
                  option4: "Two people, places, or things",
                  answer: "4",
                },
                {
                  quiz: "Use most, best and worst to compare .........?",
                  option1: "More than two people, places, or things",
                  option2: "Two people",
                  option3: "Two places",
                  option4: "Two things",
                  answer: "1",
                },
              ],
            },
            {
              name: "October 26, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Scientific Viewpoints",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "What benefits come from people working as a group?",
                  option4:
                    "How do natural events and human activities affect the environment?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "11",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About two different views on the arrival of new species into the U.S.",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "What where the uses of species introduced in the U.S.?",
                  option1:
                    "Some like horses were used for work, transportation, and recreation",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz:
                    "What where the harmful effects of species introduced in the U.S.?",
                  option1:
                    "Some like the Med. Fruit Fly destroyed native plants like citrus.",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What did we say about how you make sure to understand a persuasive article last class?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "By asking and answering questions",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What skill did we learn that you can use to understand a persuasive article last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Author's Point of View",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to persuade me to agree with the author's viewpoint with some evidence and a chart",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Biography",
                  option3: "Persuasive Article ",
                  option4: "Expository Text",
                  answer: "3",
                },
              ],
            },
            {
              name: "November 9, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What root word did we learn last class?",
                  option1: "div",
                  option2: "ope",
                  option3: "nat",
                  option4: "nativus",
                  answer: "4",
                },
                {
                  quiz: "What other root word did we learn last class?",
                  option1: "cal",
                  option2: "spec",
                  option3: "elon",
                  option4: "circ",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the root avis?",
                  option1: "It means us",
                  option2: "It means fruit",
                  option3: "It means bird",
                  option4: "It means snake",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the root nativus?",
                  option1: "It means cheer up",
                  option2: "It means walking up",
                  option3: "It means happy",
                  option4: "It means to be born",
                  answer: "4",
                },
                {
                  quiz: "What grammar did we learn?",
                  option1: "Prepositions",
                  option2: "locatives",
                  option3: "Irregular Comparative and Superlative",
                  option4: "SVP",
                  answer: "3",
                },
                {
                  quiz: "What were the 2 sounds of suffix -ion?",
                  option1: "up and down",
                  option2: "ee and e",
                  option3: "o and a",
                  option4: "shuhn and zhuhn",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the word nonnative?",
                  option1: "Born in the country of residence",
                  option2: "Not born in the country of residence",
                  option3: "Born in February",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the word species?",
                  option1: "A group of animals with the same habits",
                  option2: "A group of animals not having the same habits",
                  option3: "A group of animals with some similar habits",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What is the meaning of the word avian?",
                  option1: "Fruit",
                  option2: "Food",
                  option3: "Transportation",
                  option4: "Bird",
                  answer: "4",
                },
                {
                  quiz: "What is the prefix -ion used for?",
                  option1: "To make the noun of a verb",
                  option2: "To make the adjective of a verb",
                  option3: "To make the predicate of a verb",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 16, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Joining forces",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4: "How do different groups contribute to a cause?",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "2",
                },
                {
                  quiz: "How is summarizing while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you find the theme of stories like the one we read last class?",
                  option1: "By comparing and contrasting phonics",
                  option2: "By comparing and contrasting grammar",
                  option3:
                    "By paying attention to what the characters do and say and what happens to them.",
                  option4: "By comparing and contrasting letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is historical fiction?",
                  option1:
                    "If it features events and settings typical of the period in which the story is set.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "1",
                },
                {
                  quiz: "What is a Flashback?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3:
                    "It is a description of events and actions that occurred before the main action of the story",
                  option4: "It is an expression that has no meaning",
                  answer: "3",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4:
                    "They are words that sound the same but are spelled differently and have different meanings",
                  answer: "4",
                },
                {
                  quiz: "What part of speech are words with the -ion suffix?",
                  option1: "Verbs",
                  option2: "Nouns",
                  option3: "Adjectives",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an Adverb?",
                  option1: "It is a word that tells more about the verb",
                  option2: "It is an adjective",
                  option3: "It is a different verb",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 23, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What were the 3 features we learned a good narrative text should have last class?",
                  option1:
                    "Sequence, Develop Character and Figurative Language",
                  option2:
                    "Cause-Effect Chain, Author's point of view and Main Idea",
                  option3: "Similarities, Differences and Definitions",
                  option4: "Drama, Expository and Informational",
                  answer: "1",
                },
                {
                  quiz: "What was the text we wrote last class about?",
                  option1:
                    "About Libby's reaction to her father's comment on her poem in a letter addressed to her",
                  option2:
                    "About Libby's reaction to her brother's comment on her poem in a letter addressed to her",
                  option3:
                    "About Libby's reaction to her sister's comment on her poem in a letter addressed to her",
                  option4:
                    "About Libby's reaction to her friend's comment on her poem in a letter addressed to her",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the weekly concept of the new lesson last class?",
                  option1: "Getting Along",
                  option2: "Praying Together",
                  option3: "Helping Each Other",
                  option4: "Eating Together",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the essential question of the new lesson last class?",
                  option1: "What actions can we take to get along with others?",
                  option2: "What actions can we take to pray together?",
                  option3: "What actions can we take to help each other?",
                  option4: "What actions can we take to eat together?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "16",
                  option2: "14",
                  option3: "12",
                  option4: "8",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "The Bully",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3: "About how one student tries to deal with a bully",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "How did Ramon's advice affected Michael's problem with J.T.?",
                  option1: "It helped him kick J.T.",
                  option2:
                    "It helped him solve his feud with J.T. and they eventually became friends",
                  option3: "It helped him punch J.T.",
                  option4: "It helped him yell at J.T.",
                  answer: "2",
                },
                {
                  quiz:
                    "What advice would you give to someone being bullied and why?",
                  option1:
                    "Tell that person to report to his or her parents for protection",
                  option2: "Ask that person to cry out for relief",
                  option3: "Ask that person to fight back to gain respect",
                  option4:
                    "Report to the teacher for he or she can counsel both",
                  answer: "4",
                },
              ],
            },
            {
              name: "December 7, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What comprehension strategy did we learn and practice in this class?",
                  option1: "Summarize",
                  option2: "Sequence",
                  option3: "Theme",
                  option4: "Cause and Effect",
                  answer: "1",
                },
                {
                  quiz:
                    "What comprehension skill did we learn and practice in this class?",
                  option1: "Summarize",
                  option2: "Sequence",
                  option3: "Theme",
                  option4: "Cause and Effect",
                  answer: "3",
                },
                {
                  quiz: 'What was the genre of the text "The Bully"?',
                  option1: "Nonfiction",
                  option2: "Realistic Fiction",
                  option3: "Fiction",
                  option4: "Drama",
                  answer: "Poetry",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn and practice in this class?",
                  option1: "Connotation and Denotation?",
                  option2: "Context Clues",
                  option3: "Homophones",
                  option4: "Antonyms",
                  answer: "1",
                },
                {
                  quiz:
                    "What phonics skill did we learn and practice in this class?",
                  option1: "Words with Latin Roots",
                  option2: "Words with Greek Roots",
                  option3: "Words from Mythology",
                  option4: "Words Spanish",
                  answer: "1",
                },
                {
                  quiz:
                    'What is the meaning of the word visible if we know the Latin Root "vis" means "to see"?',
                  option1: "Can be seen",
                  option2: "Cannot be seen",
                  option3: "Can be spilled",
                  option4: "Can be cooked",
                  answer: "1",
                },
                {
                  quiz: "How do you make the comparative?",
                  option1:
                    'By adding "er" to the adjective or using "more" before the adjective',
                  option2:
                    'By adding "est" to the adjective or using "most" before the adjective',
                  option3: "By doubling the adjective",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How do you make the superlative?",
                  option1:
                    'By adding "er" to the adjective or using "more" before the adjective',
                  option2:
                    'By adding "est" to the adjective or using "most" before the adjective',
                  option3: "By doubling the adjective",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you make the comparative of adverbs?",
                  option1:
                    'By adding "er" to the adverb or using "more" before the adverb',
                  option2:
                    'By adding "est" to the adverb or using "most" before the adverb',
                  option3: 'By adding "er" to the adverb only',
                  option4: 'By adding "more" before the adverb',
                  answer: "4",
                },
                {
                  quiz: "How do you make the superlative?",
                  option1:
                    'By adding "er" to the adverb or using "more" before the adverb',
                  option2:
                    'By adding "est" to the adverb or using "most" before the adverb',
                  option3: 'By adding "est" to the adverb only',
                  option4: 'By adding "most" before the adverb',
                  answer: "4",
                },
              ],
            },
            {
              name: "December 14, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "Mysterious Oceans",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2:
                    "How are living things adapted to their environment?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "What was a way sea creatures adapt to the deep ocean?",
                  option1: "By singing",
                  option2: "Through playing",
                  option3: "By sleeping",
                  option4: "Actively forage for food",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Help check our understanding of complex ideas",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you figure out cause and effect relationships in a text?",
                  option1: 'By looking for cues such as "because of" ',
                  option2: "By closing the book",
                  option3: "By rewriting the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a map?",
                  option1: "It's a photo",
                  option2: "it's a picture",
                  option3: "It’s the flat picture of an area",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "dormant"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Running",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "agile"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Move quickly and easily",
                  answer: "4",
                },
              ],
            },
            {
              name: "December 21, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonics skill did we practice in this class?",
                  option1: "Syllabication",
                  option2: "Inflectional Endings",
                  option3: "Rhymes",
                  option4: "Words from Mythology",
                  answer: "4",
                },
                {
                  quiz: "Where did the meaning of the word Fortune come from?",
                  option1: "From Janus Roman god of beginnings",
                  option2:
                    "From Atlas Greek giant who supported the world on his shoulders",
                  option3: "From Luna Roman goddess of the moon",
                  option4: "From Fortuna Roman goddess of luck",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar skill did we learn and practice in this class?",
                  option1: "Homophones",
                  option2: "Negatives and Negative Contractions",
                  option3: "Antonyms",
                  option4: "Plurals",
                  answer: "2",
                },
                {
                  quiz: "What did we say were Negatives?",
                  option1: "Negatives are words that mean yes",
                  option2: "Negatives are words that mean happy",
                  option3: "Negatives are words that mean run",
                  option4: "Negatives are words that mean no",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar usage did we learn and practice in this class?",
                  option1: "Capitalization in emails",
                  option2: "Capitalization in letters",
                  option3: "How to correct Double Negatives",
                  option4: "How to use plurals",
                  answer: "3",
                },
                {
                  quiz: "What did we say was double negative?",
                  option1: "When there are two negatives in the same clause.",
                  option2: "When there are three negatives in the same clause.",
                  option3: "When there are no negatives in the same clause.",
                  option4: "When there are four negatives in the same clause.",
                  answer: "1",
                },
                {
                  quiz: "What is one way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By changing 1 negative to a positive",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What is another way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By eliminating one of the negative words",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What type of essay did we learn in this class?",
                  option1: "Dialogue",
                  option2: "Informative Text",
                  option3: "Opinon Essay",
                  option4: "Realistic Fiction",
                  answer: "2",
                },
                {
                  quiz:
                    "What were the 3 key points we practiced during the writing?",
                  option1:
                    "Develop a Topic, Use good Sentence Structures, and a Strong Conclusion",
                  option2: "Use Figurative Language only",
                  option3: "pay attention to verbs",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 28, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this class?",
                  option1: "Making a Difference",
                  option2: "Working Hard",
                  option3: "Prayers",
                  option4: "Bravery",
                  answer: "1",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "What impact do our actions have on our world?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "How many vocabulary did we learn in this class?",
                  option1: "12",
                  option2: "11",
                  option3: "10",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "Words to Save the World",
                  option4: "Mysterious Oceans",
                  answer: "3",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how the biologist Rachel Carson used the power of writing to change the world",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "2",
                },
                {
                  quiz:
                    "What impact did the publication of Silent Spring have on the makers of pesticides such as DDT?",
                  option1: "It made them struggle to counter Rachel's claims",
                  option2: "It made them cry",
                  option3: "It made them make more money",
                  option4: "It made them close their companies",
                  answer: "1",
                },
                {
                  quiz: "When to ask and answer questions about a text?",
                  option1: "During reading only",
                  option2: "After reading only",
                  option3: "Before, during, and after reading",
                  option4: "Only before reading",
                  answer: "3",
                },
                {
                  quiz: "Why did Rachel write about pesticide abuse?",
                  option1: "Because their friend reported its harm",
                  option2: "Because their friend said how good they were",
                  option3: "Because their friend didn't like it",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What comprehension skill did we practice in this lesson?",
                  option1: "Problem and solution",
                  option2: "Antonyms",
                  option3: "Synonyms",
                  option4: "Paragraphs",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 4, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What special feature of a biography did we learn and practice in this class?",
                  option1: "Illustrations",
                  option2: "Maps",
                  option3: "Graphs",
                  option4: "Maps",
                  answer: "1",
                },
                {
                  quiz:
                    "What 3 details helped us understand the subject of the biography we read in this lesson?",
                  option1:
                    "The illustration on page 425, that on page 426, and the one on page 427",
                  option2:
                    "The illustration on page 420, that on page 421, and the one on page 422",
                  option3:
                    "The map on page 425, that on page 426, and the one on page 427",
                  option4:
                    "The graph on page 425, that on page 426, and the one on page 427",
                  answer: "1",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words in this class?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
                {
                  quiz: "What are synonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "1",
                },
                {
                  quiz: "What are antonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "2",
                },
                {
                  quiz:
                    "How do antonyms and synonyms help you better understand the meaning of unfamiliar words?",
                  option1:
                    "The relationship between synonyms and antonyms in different texts can help you better understand the meaning of unfamiliar words",
                  option2:
                    "The relationship between synonyms and antonyms in different magazines can help you better understand the meaning of unfamiliar words",
                  option3:
                    "The relationship between synonyms and antonyms in the same sentence or paragraph can help you better understand the meaning of unfamiliar words",
                  option4:
                    "The relationship between synonyms and antonyms in different newspapers can help you better understand the meaning of unfamiliar words",
                  answer: "3",
                },
                {
                  quiz: "What number prefixes did we learn in this class?",
                  option1: "Fr-, Df-, Lo-, Co-",
                  option2: "On-, Tr-, Ez-, Yu-",
                  option3: "Un-, B-, Tr-, Ct-",
                  option4: "Uni-, Bi-, Tri-, Cent-",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Uni-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the number prefix Bi-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Cent-?",
                  option1: "Hundred",
                  option2: "Million",
                  option3: "Ten",
                  option4: "Grams",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 11, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this lesson?",
                  option1: "Out in the World",
                  option2: "Out in the Space",
                  option3: "On a Holiday",
                  option4: "At Home",
                  answer: "1",
                },
                {
                  quiz: "What was the Essential Question of this lesson?",
                  option1: "What can our connections to the world teach us",
                  option2: "How do we contribute to a cause?",
                  option3: "What is best for our environment?",
                  option4: "Can we live without the sun?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn in this lesson?",
                  option1: "10",
                  option2: "9",
                  option3: "8",
                  option4: "7",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text of this lesson?",
                  option1: "Poetry",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What types of poems did we discuss in this lesson?",
                  option1: "Active and Passive",
                  option2: "Figurative and Dormant",
                  option3: "Plain and Story",
                  option4: "Lyric and Narrative",
                  answer: "4",
                },
                {
                  quiz:
                    "How do we find the point of view of the speaker in a poem?",
                  option1: "By closing the book",
                  option2: "By summarizing the text",
                  option3:
                    "By paying attention to the speaker's word choice and thoughts expressed",
                  option4: "By reading the whole text",
                  answer: "3",
                },
                {
                  quiz: "What is Assonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of a consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "1",
                },
                {
                  quiz: "What is Consonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of the middle or final consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "2",
                },
                {
                  quiz: "What is personification?",
                  option1: "It is use of human qualities to describe humans",
                  option2:
                    "It is use of human qualities to describe living things",
                  option3:
                    "It is use of human qualities to describe animals, things, or events",
                  option4: "It is use of human qualities to describe people",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the qualities of a good poem as we learned in this lesson?",
                  option1:
                    "Should feature Strong Words, Personification, and Figurative Language",
                  option2:
                    "Should feature Good Grammar, Long Sentences, and No Prepositions",
                  option3:
                    "Should feature No Verbs, No Subject, and No Predicate",
                  option4: "All of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 18, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonics skill did we practice in this class?",
                  option1: "Syllabication",
                  option2: "Inflectional Endings",
                  option3: "Rhymes",
                  option4: "Words from Mythology",
                  answer: "4",
                },
                {
                  quiz: "Where did the meaning of the word Fortune come from?",
                  option1: "From Janus Roman god of beginnings",
                  option2:
                    "From Atlas Greek giant who supported the world on his shoulders",
                  option3: "From Luna Roman goddess of the moon",
                  option4: "From Fortuna Roman goddess of luck",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar skill did we learn and practice in this class?",
                  option1: "Homophones",
                  option2: "Negatives and Negative Contractions",
                  option3: "Antonyms",
                  option4: "Plurals",
                  answer: "2",
                },
                {
                  quiz: "What did we say were Negatives?",
                  option1: "Negatives are words that mean yes",
                  option2: "Negatives are words that mean happy",
                  option3: "Negatives are words that mean run",
                  option4: "Negatives are words that mean no",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar usage did we learn and practice in this class?",
                  option1: "Capitalization in emails",
                  option2: "Capitalization in letters",
                  option3: "How to correct Double Negatives",
                  option4: "How to use plurals",
                  answer: "3",
                },
                {
                  quiz: "What did we say was double negative?",
                  option1: "When there are two negatives in the same clause.",
                  option2: "When there are three negatives in the same clause.",
                  option3: "When there are no negatives in the same clause.",
                  option4: "When there are four negatives in the same clause.",
                  answer: "1",
                },
                {
                  quiz: "What is one way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By changing 1 negative to a positive",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What is another way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By eliminating one of the negative words",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What type of essay did we learn in this class?",
                  option1: "Dialogue",
                  option2: "Informative Text",
                  option3: "Opinon Essay",
                  option4: "Realistic Fiction",
                  answer: "2",
                },
                {
                  quiz:
                    "What were the 3 key points we practiced during the writing?",
                  option1:
                    "Develop a Topic, Use good Sentence Structures, and a Strong Conclusion",
                  option2: "Use Figurative Language only",
                  option3: "pay attention to verbs",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 25, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this class?",
                  option1: "Making a Difference",
                  option2: "Working Hard",
                  option3: "Prayers",
                  option4: "Bravery",
                  answer: "1",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "What impact do our actions have on our world?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "How many vocabulary did we learn in this class?",
                  option1: "12",
                  option2: "11",
                  option3: "10",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "Words to Save the World",
                  option4: "Mysterious Oceans",
                  answer: "3",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how the biologist Rachel Carson used the power of writing to change the world",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "2",
                },
                {
                  quiz:
                    "What impact did the publication of Silent Spring have on the makers of pesticides such as DDT?",
                  option1: "It made them struggle to counter Rachel's claims",
                  option2: "It made them cry",
                  option3: "It made them make more money",
                  option4: "It made them close their companies",
                  answer: "1",
                },
                {
                  quiz: "When to ask and answer questions about a text?",
                  option1: "During reading only",
                  option2: "After reading only",
                  option3: "Before, during, and after reading",
                  option4: "Only before reading",
                  answer: "3",
                },
                {
                  quiz: "Why did Rachel write about pesticide abuse?",
                  option1: "Because their friend reported its harm",
                  option2: "Because their friend said how good they were",
                  option3: "Because their friend didn't like it",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What comprehension skill did we practice in this lesson?",
                  option1: "Problem and solution",
                  option2: "Antonyms",
                  option3: "Synonyms",
                  option4: "Paragraphs",
                  answer: "1",
                },
              ],
            },
            {
              name: "February 1, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What special feature of a biography did we learn and practice in this class?",
                  option1: "Illustrations",
                  option2: "Maps",
                  option3: "Graphs",
                  option4: "Maps",
                  answer: "1",
                },
                {
                  quiz:
                    "What 3 details helped us understand the subject of the biography we read in this lesson?",
                  option1:
                    "The illustration on page 425, that on page 426, and the one on page 427",
                  option2:
                    "The illustration on page 420, that on page 421, and the one on page 422",
                  option3:
                    "The map on page 425, that on page 426, and the one on page 427",
                  option4:
                    "The graph on page 425, that on page 426, and the one on page 427",
                  answer: "1",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words in this class?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
                {
                  quiz: "What are synonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "1",
                },
                {
                  quiz: "What are antonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "2",
                },
                {
                  quiz:
                    "How do antonyms and synonyms help you better understand the meaning of unfamiliar words?",
                  option1:
                    "The relationship between synonyms and antonyms in different texts can help you better understand the meaning of unfamiliar words",
                  option2:
                    "The relationship between synonyms and antonyms in different magazines can help you better understand the meaning of unfamiliar words",
                  option3:
                    "The relationship between synonyms and antonyms in the same sentence or paragraph can help you better understand the meaning of unfamiliar words",
                  option4:
                    "The relationship between synonyms and antonyms in different newspapers can help you better understand the meaning of unfamiliar words",
                  answer: "3",
                },
                {
                  quiz: "What number prefixes did we learn in this class?",
                  option1: "Fr-, Df-, Lo-, Co-",
                  option2: "On-, Tr-, Ez-, Yu-",
                  option3: "Un-, B-, Tr-, Ct-",
                  option4: "Uni-, Bi-, Tri-, Cent-",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Uni-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the number prefix Bi-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Cent-?",
                  option1: "Hundred",
                  option2: "Million",
                  option3: "Ten",
                  option4: "Grams",
                  answer: "1",
                },
              ],
            },
            {
              name: "February 8, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this lesson?",
                  option1: "Out in the World",
                  option2: "Out in the Space",
                  option3: "On a Holiday",
                  option4: "At Home",
                  answer: "1",
                },
                {
                  quiz: "What was the Essential Question of this lesson?",
                  option1: "What can our connections to the world teach us",
                  option2: "How do we contribute to a cause?",
                  option3: "What is best for our environment?",
                  option4: "Can we live without the sun?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn in this lesson?",
                  option1: "10",
                  option2: "9",
                  option3: "8",
                  option4: "7",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text of this lesson?",
                  option1: "Poetry",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What types of poems did we discuss in this lesson?",
                  option1: "Active and Passive",
                  option2: "Figurative and Dormant",
                  option3: "Plain and Story",
                  option4: "Lyric and Narrative",
                  answer: "4",
                },
                {
                  quiz:
                    "How do we find the point of view of the speaker in a poem?",
                  option1: "By closing the book",
                  option2: "By summarizing the text",
                  option3:
                    "By paying attention to the speaker's word choice and thoughts expressed",
                  option4: "By reading the whole text",
                  answer: "3",
                },
                {
                  quiz: "What is Assonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of a consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "1",
                },
                {
                  quiz: "What is Consonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of the middle or final consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "2",
                },
                {
                  quiz: "What is personification?",
                  option1: "It is use of human qualities to describe humans",
                  option2:
                    "It is use of human qualities to describe living things",
                  option3:
                    "It is use of human qualities to describe animals, things, or events",
                  option4: "It is use of human qualities to describe people",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the qualities of a good poem as we learned in this lesson?",
                  option1:
                    "Should feature Strong Words, Personification, and Figurative Language",
                  option2:
                    "Should feature Good Grammar, Long Sentences, and No Prepositions",
                  option3:
                    "Should feature No Verbs, No Subject, and No Predicate",
                  option4: "All of the above",
                  answer: "1",
                },
              ],
            },
          ],
        },
        {
          quizName: "周三晚",
          tests: [
            {
              name: "March 3, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What did we say was the title of unit 1?",
                  option1:
                    "Changes",
                  option2:
                    "Advancement",
                  option3:
                    "Development",
                  option4:
                    "Expansion",
                  answer: "1",
                },
                {
                  quiz:
                    "How many new vocabulary did we learn?",
                  option1:
                    "8",
                  option2:
                    "16",
                  option3:
                    "24",
                  option4:
                    "48",
                  answer: "2",
                },
                {
                  quiz:
                    "what was the weekly concept of this class?",
                  option1:
                    "Goals",
                  option2:
                    "Perspectives",
                  option3:
                    "Horizons",
                  option4:
                    "Compassion",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "COW music",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About the way a girl's outlook changes when she moves to a new home",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "How do new experiences offer new perspectives?",
                  answer: "4",
                },
                {
                  quiz:
                    "What happened in the first section of the excerpt on page 23 of Reading Writing Workshop?",
                  option1:
                    "It said how Paul was excited about the vacation plan",
                  option2: "It said how Paul was packing for the travel",
                  option3: "Celia and her mom leave for their new house, and Celia expresses how she'll miss her old neighborhood",
                  option4:
                    "It said how Paul was telling his friends about his vacation plan",
                  answer: "3",
                },
                {
                  quiz:
                    "What happened in the second section of the excerpt on page 24 of Reading Writing Workshop?",
                  option1:
                    "It detailed how Paul's parents were reluctant to travel",
                  option2:
                    "It detailed how Paul expressed his anger toward the travel plan",
                  option3:
                    "Celia gets more freedom from her mom, and she eventually meets a music partner, Jason, thereby completly changing her outlook on the country.",
                  option4:
                    "It detailed how Paul came to realize the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  answer: "3",
                },
                {
                  quiz:
                    "What happened in the third section of the excerpt on page 25 of Reading Writing Workshop?",
                  option1:
                    "It talked about the food Uncle Art ordered for dinner and how Paul was attracted by it at first sight",
                  option2:
                    "Celia and Jason went for a duo, and it was a success",
                  option3:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at all",
                  option4:
                    "It talked about the food Uncle Art ordered for dinner and how Paul loved it and devoured it",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 6, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 13, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Playing outside",
                  option2: "Running in the bush",
                  option3: "A plan of action",
                  option4: "A gift for you",
                  answer: "3",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Effects of technology in our lives",
                  option2: "What can different cultures teach us?",
                  option3: "How can learning about nature help us?",
                  option4: "When has a plan helped you accomplish a task?",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story?",
                  option1: "Survivaland",
                  option2: "The Magical Lost Brocade",
                  option3: "RESCUE",
                  option4: "Foul Shot",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the story?",
                  option1: "Folktale",
                  option2: "Biography",
                  option3: "Realistic Fiction",
                  option4: "Fantasy",
                  answer: "1",
                },
                {
                  quiz:
                    "How did following the plan help Ping find the Magical Lost Brocade?",
                  option1:
                    "The plan helped him brave the Fire Valley, Ice Ocean and the Mountain of the Sun safely",
                  option2: "The plan helped him see each place",
                  option3:
                    "The plan helped him convince the Fire Valley not to burn him",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "How do we know if our prediction of events coming up next in the plot is correct?",
                  option1: "By asking our parents",
                  option2: "By asking the teaching",
                  option3:
                    "We use evidence from the story to see if our prediction is correct",
                  option4: "By asking our friends",
                  answer: "3",
                },
                {
                  quiz: "If our prediction isn't correct, what do we do?",
                  option1: "We can do nothing",
                  option2: "We can forget about it",
                  option3: "We can just leave like that",
                  option4: "We can revise it",
                  answer: "4",
                },
                {
                  quiz:
                    "What did the characters say and do that help find the theme of the story?",
                  option1:
                    "Ping assured his mom to bring back the Magical Lost Brocade, and the wiseman he met told him a plan to follow to get to the Palace where the Magical Lost Brocade was",
                  option2: "Ping said he was going to have fun",
                  option3:
                    "Ping said it was too hard, and that he won't make it",
                  option4: "Ping declared he can not do it",
                  answer: "1",
                },
                {
                  quiz: "What happened to Ping in the story?",
                  option1: "He stayed home and slept",
                  option2:
                    "He went through the scorching fire without saying a word, crossed the freezing cold Ice Ocean without shivering, and climbed the steep Mountain of the Sun successfully",
                  option3: "He spent his time watching TV",
                  option4: "He helped his mom weave a new Brocade",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "Do not fulfill your promise",
                  option2: "A promise is nothing",
                  option3: "A promise is a debt",
                  option4: "A promise is just another simple sentence",
                  answer: "3",
                },
              ],
            },
            {
              name: "May 20, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    'What did the character do in "The Magical Lost Brocade" that help figure out the theme of the story?',
                  option1:
                    "Ping left their home to go look for the Magical Lost Brocade assuring his mom to bring it back",
                  option2:
                    "Ping was very excited about the idea and started laughing",
                  option3: "Ping ran to the lake",
                  option4: "Ping ate ice cream that day",
                  answer: "1",
                },
                {
                  quiz:
                    'What did the character say in "The Magical Lost Brocade" that help figure out the theme of the story?',
                  option1: "Ping said he will not do it",
                  option2: 'Ping said, "I can not do it"',
                  option3:
                    'Ping said, "It sounds like an extremely difficult journey but I\'ll do my very best"',
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "In unity there is strength",
                  option2: "A promise is a debt",
                  option3: "An apple a day keeps the doctor away",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    'Why is "The Magical Lost Brocade" considered a Folktale?',
                  option1:
                    "Because it has characters, events and settings that exist in real life",
                  option2: "Because it has a made-up setting",
                  option3: "Because it has characters and events that are real",
                  option4:
                    'Because it describes the set of tasks, the hero, Ping, must accomplish in order to find the "Magical Lost Brocade", crossing the obstacles is repeated, and there are instances of imagery and foreshadowing in the story.',
                  answer: "4",
                },
                {
                  quiz: "What is foreshadowing?",
                  option1:
                    "It is giving hints at what will happen next in the plot",
                  option2: "It is more explanation of the text",
                  option3: "It is the denotation of expressions ",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is imagery?",
                  option1: "It is a paragraph that stand on its own",
                  option2: "It is phrases that do not have a verb",
                  option3: "It is sentences that do not have a period",
                  option4:
                    "It is words and phrases that help create pictures in a reader's mind",
                  answer: "4",
                },
                {
                  quiz: "What is personification?",
                  option1: "It is calling an animal a person",
                  option2:
                    "It is giving human qualities to animals, objects, things, or events to help readers better picture it",
                  option3: "It is transforming an object into a person",
                  option4: "It is turning a thing or event into a person",
                  answer: "2",
                },
                {
                  quiz: "What are contractions?",
                  option1: "They are words formed by adding -ed",
                  option2: "They are words formed by adding -ing",
                  option3: "They are words formed by combining two words",
                  option4:
                    "They're words formed by replacing a vowel or consonant and vowel with an apostrophe",
                  answer: "4",
                },
                {
                  quiz: "What is a possessive noun?",
                  option1: "It is a noun that can be replaced by a verb",
                  option2: "It is a noun that is also a verb",
                  option3:
                    "It is a noun that shows who or what owns or has something",
                  option4: "It is a noun that has multiple meaning",
                  answer: "3",
                },
                {
                  quiz:
                    "How to make the possessive of a singular noun or plural noun?",
                  option1: "For all of them, add 's to make them possessive",
                  option2:
                    "For singular nouns and special plural nouns, add 's to make them possessive, and for most plural nouns, add just an ' to make them possessive",
                  option3:
                    "For all of them, just add ' to make them possessive",
                  option4:
                    "For all of them, just add s to make them possessive",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 27, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Making It Happen",
                  option2: "Different Cultures Teach Us",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3: "How do you prepare for a picnic?",
                  option4: "Can the sun walk?",
                  answer: "2",
                },
                {
                  quiz: "What is a narrative poem?",
                  option1: "It is a poem that does not have a rhyming pattern",
                  option2: "It is a short poem",
                  option3: "It is a poem that tells a story",
                  option4: "It is a long poem",
                  answer: "3",
                },
                {
                  quiz: "What is a free verse?",
                  option1: "It is a poem that tells a story",
                  option2: "It is a long poem",
                  option3: "It is a short poem",
                  option4: "It is a poem that does not have a rhyming pattern",
                  answer: "4",
                },
                {
                  quiz: "What is repetition in poetry?",
                  option1:
                    "It is the repeated use of words, sounds or phrases for effect or emphasis",
                  option2: "It is the repeated use of punctuations",
                  option3: "It is the repeated use of a particular grammar",
                  option4: "It is the repeated use of the same title",
                  answer: "1",
                },
                {
                  quiz: "What is rhyme in poetry?",
                  option1: "It is the repetition of the same consonant sound",
                  option2: "It is the repetition of the same vowel sound",
                  option3: "It is the repetition of the same word",
                  option4: "It is the repetition of the same letter",
                  answer: "2",
                },
                {
                  quiz: "What are homographs?",
                  option1:
                    "They're words that are spelled the same and have the same meaning",
                  option2:
                    "They're words that are spelled the same but have different meanings and always have the same pronunciation",
                  option3:
                    "They're words that are spelled the same but have different meanings and may or may not have the same pronunciation",
                  option4:
                    "They're words that are not spelled the same but have the same meaning",
                  answer: "3",
                },
                {
                  quiz: "How do you find the contextual meaning of homographs?",
                  option1: "None of the below",
                  option2: "It's the same as its denotation",
                  option3: "Guess it from its letters",
                  option4: "Use context clues to figure out the meaning",
                  answer: "4",
                },
                {
                  quiz: "What two uses did we learn repetition have on poems?",
                  option1: "Foreshadowing and Imagery",
                  option2: "Effect and Emphasis",
                  option3: "Illustrating and Depicting",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the second poem?",
                  option1: "In unity there's strength",
                  option2: "It takes two to tango",
                  option3: "Hope is the source of life",
                  option4: "Too many cooks spoil the broth",
                  answer: "3",
                },
              ],
            },
            {
              name: "June 3, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What is a syllable?",
                  option1: "It's a long word",
                  option2:
                    "It's a unit of pronunciation having one consonant sound",
                  option3:
                    "It's a unit of pronunciation having one vowel sound",
                  option4: "It's a short word",
                  answer: "3",
                },
                {
                  quiz: "What is a closed syllable?",
                  option1:
                    "It's a syllable that ends with a consonant and a vowel",
                  option2: "It's a syllable that ends with a consonant",
                  option3: "It's a syllable that ends with a vowel",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "What are prepositional phrases?",
                  option1:
                    "They're phrases that start with an article and ends with a verb",
                  option2:
                    "They're phrases that start with a noun and ends with a verb",
                  option3:
                    "They're phrases that start with a preposition and ends with its object",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What are the uses of prepositional phrases?",
                  option1: "They can be used as a verb",
                  option2: "They can be used as an article",
                  option3: "They can be used a noun",
                  option4: "They can be used as an adjective or as an adverb",
                  answer: "4",
                },
                {
                  quiz: "Which way is how we can capitalize titles?",
                  option1: "Use numbers",
                  option2: "Use all lower case letters",
                  option3: "Use all capital letters",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "Which way is how we can capitalize titles?",
                  option1: "Use quotation marks for longer works",
                  option2: "Use quotation marks for all works",
                  option3: "Use quotation marks for shorter works",
                  option4: "Never use quotation marks for shorter works",
                  answer: "3",
                },
                {
                  quiz: "Which way is how we can capitalize titles?",
                  option1: "Always capitalize all the words",
                  option2: "Capitalize the first word and all the main words",
                  option3:
                    "Do not capitalize the first word and all the main words",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "Which way is how we can punctuate letters?",
                  option1: "Put a comma after the street number in the address",
                  option2: "No punctuation in the address",
                  option3:
                    "Put a period after the street number in the address",
                  option4: "Put a comma after the street name in the address",
                  answer: "2",
                },
                {
                  quiz: "Which way is how we can punctuate letters?",
                  option1:
                    "Put a comma after the greeting of a business letter and a colon after the greeting of a personal letter",
                  option2:
                    "Put a comma after the greeting of a personal letter and a colon after the greeting of a business letter",
                  option3:
                    "Put a period after the greeting of a personal letter or a business letter",
                  option4:
                    "Put a colon after the greeting of a personal letter or a business letter",
                  answer: "2",
                },
                {
                  quiz: "Which way is how we can punctuate letters?",
                  option1: "Always put a comma after the closing",
                  option2: "Never put a comma after the closing",
                  option3: "Sometimes put a comma after the closing",
                  option4: "Always put a period after the closing",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 10, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It said how Paul was excited about the vacation plan",
                  option2: "It said how Paul was packing for the travel",
                  option3: "It said how Paul was reluctant to travel",
                  option4:
                    "It said how Paul was telling his friends about his vacation plan",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It detailed how Paul's parents were reluctant to travel",
                  option2:
                    "It detailed how Paul expressed his anger toward the travel plan",
                  option3:
                    "It detailed how Paul's parents prepared to travel and how Paul discovered the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  option4:
                    "It detailed how Paul came to realize the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It talked about the food Uncle Art ordered for dinner and how Paul was attracted by it at first sight",
                  option2:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at first sight, but later came to like it",
                  option3:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at all",
                  option4:
                    "It talked about the food Uncle Art ordered for dinner and how Paul loved it and devoured it",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires",
                  option2:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires, and the music people loved to dance there compared to New York",
                  option3:
                    "It was about how Paul, his family, and relatives came to discover the music people loved to dance in Buenos Aires compared to New York",
                  option4:
                    "It was about how Paul, his family, and relatives couldn't discover the new sights, sounds, and languages spoken in Buenos Aires, including the music people loved to dance there",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family were scared",
                  option2:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned about the culture of soccer in Argentina",
                  option3:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family weren't impressed at all",
                  option4:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned nothing about the culture of soccer in Argentina",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It told how Paul found out that he loved soccer team colors and planned to paint his room in those colors",
                  option2:
                    "It told how Paul wanted to go back to New York as quick as possible",
                  option3:
                    "It told how Paul couldn't understand the culture of soccer in Argentina",
                  option4:
                    "It told how Paul loathed the culture of soccer in Argentina",
                  answer: "1",
                },
                {
                  quiz: "How do you summarize a story?",
                  option1:
                    "By telling the important events and details in your own words",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "Why do we summarize stories?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "To help us remember what we have read",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "When do we summarize a story?",
                  option1:
                    "We can only summarize the whole story when we finish reading it",
                  option2:
                    "We can summarize the whole story when we finish reading it, or we can summarize parts of the story while reading it",
                  option3:
                    "We can only summarize parts of the story while reading it",
                  option4: "We can summarize the story before reading it",
                  answer: "2",
                },
                {
                  quiz:
                    "In what circumstances were Paul and his family as described on page 167?",
                  option1:
                    "His mom was discussing a vacation plan with him and his dad to go visit his uncle and aunt in Argentina, and Paul was very excited to travel",
                  option2:
                    "His mom was troubled by the vacation plan to go visit his uncle and aunt in Argentina",
                  option3:
                    "His mom was discussing a vacation plan with him to go visit his uncle and aunt in Argentina, but his dad was very reluctant to travel",
                  option4:
                    "His mom was discussing a vacation plan with him and his dad to go visit his uncle and aunt in Argentina, but Paul was very reluctant to travel",
                  answer: "4",
                },
                {
                  quiz:
                    "What were Paul's first night experiences in Buenos Aires like, and what effects did they have on him?",
                  option1:
                    "In the beginning, Paul was in bleak mood, but later started liking the place after realizing some similarities in food culture between his home and Buenos Aires, and coming to learn about the dance and soccer culture in Argentina",
                  option2:
                    "Paul was excited since when they landed in Buenos Aires and that made him like the place",
                  option3:
                    "Paul was excited in the beginning, but later the food in Buenos Aires made him loath the place",
                  option4:
                    "Paul started in bleak mood, and the unacceptable culture in Buenos Aires made him loath the place more",
                  answer: "1",
                },
                {
                  quiz: "What is the theme of a story?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "It is title of a story",
                  option4:
                    "It is the overall idea or message about life that the author wants the reader to know",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a story?",
                  option1: "You can do that by thinking yourself",
                  option2:
                    "You can do that by thinking about what characters say and do, and what happens to them",
                  option3:
                    "You can do that by looking at the last sentence only",
                  option4: "You can do that by looking at the title only",
                  answer: "2",
                },
                {
                  quiz:
                    'What did the characters in "A Reluctant Traveler" say and or do that help conclude to the theme of the story?',
                  option1:
                    "Paul's mom said that they were going to Argentina to visit Paul's uncle and aunt",
                  option2:
                    "Paul's uncle ordered Empanadas for dinner for them on their first night in Argentina",
                  option3:
                    "Paul started saying packing winter clothes in August is weird, but in the end said he might paint his room in soccer team colors after visiting Argentina",
                  option4: "Paul's aunt said she wants to be multilingual",
                  answer: "3",
                },
                {
                  quiz:
                    'What happened to the characters in "A Reluctant Traveler" that help conclude to the theme of the story?',
                  option1: "Paul's family was going to England",
                  option2:
                    "Paul's family was going to Argentina to visit his aunt and uncle and there in Buenos Aires, his aunt and uncle took them to visit the place and learn about the food, dance, and soccer culture over there.",
                  option3: "Paul's family was going to France for vacation",
                  option4:
                    "Paul's family was going to Beijing to visit his aunt and uncle",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "Judge a book by its cover",
                  option2: "Do not judge a book by its cover",
                  option3: "Never read a book",
                  option4: "Do not open your book",
                  answer: "2",
                },
              ],
            },
            {
              name: "June 17, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Being Resourceful ",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "How can learning about nature be useful?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "18",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how 4 friends use their knowledge of nature to survive",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "1",
                },
                {
                  quiz:
                    "How many friends were actually helpful, and who were they?",
                  option1: "3: Latrice, Raul, and Juanita",
                  option2: "2: Raul and Juanita",
                  option3: "1: Juanita",
                  option4: "All of them",
                  answer: "1",
                },
                {
                  quiz: "What strategy do you use to better understand a text?",
                  option1: "Summarize",
                  option2: "Looking",
                  option3: "Skimming",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "How do you summarize a text?",
                  option1: "By reading well",
                  option2: "By looking fast",
                  option3:
                    "By deciding the most important details and retelling them in our own words",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you tell which details are most important?",
                  option1: "By guessing",
                  option2:
                    "By asking ourself if those details are helping us understand what is happening or not",
                  option3: "By looking at the longest ones",
                  option4: "By looking at the shortest ones",
                  answer: "2",
                },
                {
                  quiz:
                    "How does the theme of a story help us better understand a text?",
                  option1: "It says how good something is",
                  option2: "It tells what we should be thinking",
                  option3:
                    "It shares the message about life the author wants us to know after reading the story",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you find the theme of a story?",
                  option1: "By looking at homographs in the story",
                  option2: "By reading many times",
                  option3: "by looking at latin roots",
                  option4:
                    "By looking into what the characters say, do, and what happens to them",
                  answer: "3",
                },
              ],
            },
            {
              name: "June 24, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What vowel sound does the first vowel become in double vowel syllables?",
                  option1: "Short and Long vowel sound",
                  option2: "Short vowel sound",
                  option3: "Long vowel sound",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What is shifting tenses?",
                  option1:
                    "Same tense in verbs in a simple sentence or paragraph",
                  option2:
                    "Tense change in verbs in a simple sentence or paragraph",
                  option3:
                    "No tense change in verbs in a simple sentence or paragraph",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "How do we avoid shifting tenses?",
                  option1:
                    "By making sure verbs in a sentence or paragraph have different tenses",
                  option2:
                    "By making sure verbs in a sentence or paragraph are in different tenses",
                  option3:
                    "By making sure verbs in a sentence or paragraph are in the same tense",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "Which is one feature of an opinion essay?",
                  option1: "Use foreshadowing",
                  option2: "Use dialogue",
                  option3: "Use figurative language",
                  option4: "Use connotation and denotation",
                  answer: "4",
                },
                {
                  quiz: "Which is one feature of an opinion essay?",
                  option1: "Use foreshadowing",
                  option2: "Use dialogue",
                  option3: "Chose the right words",
                  option4: "Use figurative language",
                  answer: "3",
                },
                {
                  quiz: "Which is one feature of an opinion essay?",
                  option1: "Use foreshadowing",
                  option2: "Use dialogue",
                  option3: "Use supporting details from text evidence",
                  option4: "Use figurative language",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By writing the question",
                  option2: "By saying your opinion",
                  option3: "By writing text evidence",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you write the body of an opinion essay?",
                  option1:
                    "By using facts from text evidence as supporting details",
                  option2: "By restating your opinion",
                  option3: "By rewriting the question",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How do you write the conclusion of an opinion essay?",
                  option1:
                    "By using facts from text evidence as supporting details",
                  option2: "By rewriting the question",
                  option3:
                    "By restating your opinion with some more precise words",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you make your essay fluent?",
                  option1: "By using a lot of prepositions",
                  option2: "By using a lot of words",
                  option3: "By doing nothing",
                  option4: "By using transition words like however",
                  answer: "4",
                },
              ],
            },
            {
              name: "July 1, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Patterns of Change",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can learning about different cultures teach us?",
                  option4: "Where can we find patterns in nature?",
                  answer: "4",
                },
                {
                  quiz: "What are the two kinds of Igneous Rocks we learned?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "Granite and Obsidian",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What patterns can we find in Igneous Rocks?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "Tessellations",
                  answer: "4",
                },
                {
                  quiz:
                    "What are the three kinds of Sedimentary Rocks we learned?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2: "Sandstone, Limestone, and Strata",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What patterns can we find in Sedimentary Rocks?",
                  option1: "Repetition of lines and layers",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is the first stage of The Rock Cycle?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "Sediment",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "Squeezing and cementing of sediment forms ...",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Sedimentary Rock",
                  answer: "4",
                },
              ],
            },
            {
              name: "July 8, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What patterns are found in sedimentary rocks?",
                  option1: "Limestone, Marble, and Sandstone",
                  option2: "Granite and Obsidian",
                  option3: "Blackstone, Whitestone and Cactus",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Where can we see the patterns found in sedimentary rocks?",
                  option1: "In the sky",
                  option2: "In deserts or sea and beaches or riverbanks",
                  option3: "In the house",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do rocks change?",
                  option1: "They move from one place to another",
                  option2: "They get transported by people",
                  option3:
                    "Water, wind, and temperature over long periods of time erode and change them, and even shape and sketch designs on them",
                  option4: "They turn into plants and other living things",
                  answer: "3",
                },
                {
                  quiz: "How are Igneous rocks formed?",
                  option1:
                    "They are formed after the wind blows trees down and those trees decay and accumulate to form Igneous rock.",
                  option2:
                    "They are formed after hard rocks get crushed by people as they walk on it and eventually split into Igneous rock.",
                  option3:
                    "They are formed after hot gas far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually turns into crystals of Igneous rock.",
                  option4:
                    "They are formed after hot liquid rock called magma or lava far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually slowly cools to form crystals of Igneous rock.",
                  answer: "4",
                },
                {
                  quiz:
                    'What was the main idea of the section "Sedimentary Rocks" on page 196 of Reading Writing Workshop?',
                  option1: "Sedimentary rocks could be used as soccer balls",
                  option2: "Air will get compressed into sedimentary rocks",
                  option3:
                    "Particles such as sand or bones and shells form different sedimentary rocks",
                  option4: "Sedimentary rocks are extremely hard",
                  answer: "3",
                },
                {
                  quiz:
                    'What was the main idea of the section "Rock Formations" on page 196 of Reading Writing Workshop?',
                  option1: "Rock formations are so beautiful",
                  option2:
                    "Layers of sedimentary rock create different rock formations",
                  option3: "Rock formations are very rare and scarce",
                  option4:
                    "Soil particles accumulate in the air to create rock formations",
                  answer: "2",
                },
                {
                  quiz:
                    'How did you know the selection "Patterns of Change" was an expository text?',
                  option1:
                    "It provided evidence and gave reasons why patterns occur, supported them with facts and concrete details, and included diagrams that illustrated information",
                  option2:
                    "It had imaginary characters that couldn't exist in real life",
                  option3:
                    "The setting was all made-up and the events were too unrealistic",
                  option4: "It had hero with a set of tasks to accomplish",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "geo"?',
                  option1: "Earth",
                  option2: "Sun",
                  option3: "Moon",
                  option4: "Water",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "logy"?',
                  option1: "Eat",
                  option2: "Life",
                  option3: "Play",
                  option4: "Study",
                  answer: "4",
                },
                {
                  quiz: 'What is the meaning of the greek root "chrono"?',
                  option1: "Pet",
                  option2: "History",
                  option3: "Time",
                  option4: "Fast",
                  answer: "3",
                },
              ],
            },
            {
              name: "July 15, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 22, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "5",
                  option4: "8",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "1",
                },
                {
                  quiz:
                    "What did the historians find by studying the ancient quipu?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "Some said it was a calculator and others said it was a language",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "3",
                },
                {
                  quiz: "When do you summarize a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "As you read and or in the end",
                  option3: "Only as you read",
                  option4: "Only in the end",
                  answer: "2",
                },
                {
                  quiz: "What was each author's point of view?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "4",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Same sentence context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "r-controlled vowel syllables",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "Irregular verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How are irregular verbs special?",
                  option1: "They are not",
                  option2: "They link the subject and a word in the predicate",
                  option3: "They help the main verb",
                  option4:
                    "They do not end in -ed to form the past tense and have special spellings when used with have in the perfect or progressive tenses",
                  answer: "4",
                },
                {
                  quiz:
                    "How do you spell the irregular verb ride when used with have?",
                  option1: "Have ride",
                  option2: "Have rode",
                  option3: "Have ridden",
                  option4: "Have rid",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you spell the irregular verb take when used with have?",
                  option1: "Have taken",
                  option2: "Have take",
                  option3: "Have took",
                  option4: "Have taked",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you spell the irregular verb be when used with have?",
                  option1: "Have be",
                  option2: "Have been",
                  option3: "Have is",
                  option4: "Have was",
                  answer: "2",
                },
                {
                  quiz:
                    "How do you spell the irregular verb begin when used with have?",
                  option1: "Have begin",
                  option2: "Have began",
                  option3: "Have begun",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you spell the irregular verb come when used with have?",
                  option1: "Have come",
                  option2: "Have came",
                  option3: "Have camed",
                  option4: "Have comed",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you spell the irregular verb do when used with have?",
                  option1: "Have do",
                  option2: "Have did",
                  option3: "Have done",
                  option4: "Have doed",
                  answer: "3",
                },
                {
                  quiz: "How do you write a good informative essay?",
                  option1:
                    "Use precise language, use transitions, and include reasons and evidence",
                  option2: "Write many conclusions",
                  option3: "Write many meaningless details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 29, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was Unit 4 about?",
                  option1: "How do we explore plants?",
                  option2: "How do we go to school?",
                  option3: "How do we decide what is important?",
                  option4: "How do we ride a bike?",
                  answer: "3",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Praying",
                  option2: "Sharing Stories",
                  option3: "Dancing",
                  option4: "Learning to cook",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "What can we do to improve our reading",
                  option2: "What are the kinds of tales?",
                  option3:
                    "What kinds of stories do we tell and why do we tell them?",
                  option4: "What can we bring to a picnic",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn?",
                  option1: "8",
                  option2: "10",
                  option3: "12",
                  option4: "14",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story we read last class?",
                  option1: "Types of Rocks",
                  option2: "Plants and Nature",
                  option3: "How Mighty Kate Stopped the Train",
                  option4: "A devised plan",
                  answer: "3",
                },
                {
                  quiz: "What was the story about?",
                  option1: "About a girl collecting plants",
                  option2: "About four friends playing a game",
                  option3: "About a heroic young girl who saves the day",
                  option4: "About types of rocks",
                  answer: "3",
                },
                {
                  quiz: "How did the author tell the story?",
                  option1: "In a dull way",
                  option2: "In a fantastic way",
                  option3: "In an angry way",
                  option4: "In a rushed way",
                  answer: "2",
                },
                {
                  quiz: "Why did the author tell the story that way?",
                  option1: "To tell the reader what to do",
                  option2: "To catch the reader's attention",
                  option3: "To drive away the reader",
                  option4: "To make the story sound scary",
                  answer: "2",
                },
                {
                  quiz: "How did you know the story was a Tall Tale?",
                  option1: "It had a larger-than-life character, Kate",
                  option2:
                    "It described events that couldn't happen in real life such as the author said Kate's whistle traveled kilometers",
                  option3:
                    "It had humorous exaggeration and hyperbole where Kate yanked up workers in distress with one hand",
                  option4: "All of the above",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 5, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4: "How to pronounce diphthongs",
                  answer: "3",
                },
                {
                  quiz: "What are pronouns?",
                  option1: "They are common nouns",
                  option2: "They are words that replace nouns",
                  option3: "They are nouns",
                  option4: "They are verbs",
                  answer: "2",
                },
                {
                  quiz: "What are antecedents?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are words that pronouns replace",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are indefinite pronouns?",
                  option1:
                    "They are pronouns that are in the middle of the sentence",
                  option2:
                    "They are pronouns that are in the end of the sentence",
                  option3:
                    "They are pronouns that are in the beginning of the sentence",
                  option4:
                    "They are pronouns that refer to something or someone not specific",
                  answer: "4",
                },
                {
                  quiz: "What is pronoun-antecedent agreement?",
                  option1: "They must match in gender only",
                  option2: "They must match in number only",
                  option3: "They must match in number and gender",
                  option4: "They must match in agreement",
                  answer: "3",
                },
                {
                  quiz:
                    "What kind of text did we practice to write last class?",
                  option1: "Poem",
                  option2: "Opinion essay",
                  option3: "Narrative text",
                  option4: "Informative text",
                  answer: "3",
                },
                {
                  quiz: "Which is a way to make a narrative text fun?",
                  option1: "Use formal voice",
                  option2: "Use informal voice",
                  option3: "Use transition words",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you describe scenes precisely?",
                  option1: "By using many words",
                  option2: "By using sensory details",
                  option3: "By using verbs",
                  option4: "By using nouns",
                  answer: "2",
                },
                {
                  quiz: "How do you reinforce ideas in a narrative text?",
                  option1: "By changing the style and tone",
                  option2: "By using more words",
                  option3: "By using sensory details",
                  option4: "By using figurative language",
                  answer: "4",
                },
                {
                  quiz: "What narrative text did we write last class?",
                  option1: "Where Kate whistled",
                  option2: "Where Kate tossed a boulder",
                  option3: "Where Kate wrung the wet log",
                  option4: "Where babe Kate picked up her doc",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 12, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Drama",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "Where's Brownie?",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About kids who piece together clues to find a missing pet",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "2",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can you discover when you give things a second look?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How do Alex's and Evan's observations help them find Brownie?",
                  option1:
                    "They learn that chameleons change color with their environments, so look for possible different-color Brownie",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you do to better understand a play?",
                  option1:
                    "By visualizing the scene descriptions, characters, settings, and actions",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "In a play, who do you call a speaker?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "A character who delivers a particular line of dialogue from his or her own point of view",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "In a play, who do you call a narrator?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "One who provides information from a point outside the main action of the play",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What features make a mystery play?",
                  option1:
                    "Center on a mystery that must be solved using clues, is made up mostly of dialogue among the characters, and contain scenes, setting details, and stage directions ",
                  option2:
                    "The four friends went to Survivaland, they had fun, and they got out",
                  option3:
                    "The four friends went to Survivaland, they had fun, and they didn't make it back",
                  option4:
                    "The four friends went into the game, they had fun, and they got out",
                  answer: "1",
                },
                {
                  quiz: "What are adages and proverbs?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "They are sayings that are often repeated",
                  option4:
                    "It is the message about life that the author thinks is important",
                  answer: "3",
                },
                {
                  quiz: "What did we learn about prefixes last class?",
                  option1: "How they change the stress in words",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "Why did we learn how they change the stress in words?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "To increase our reading fluency",
                  answer: "4",
                },
                {
                  quiz: "How many pronouns did we learn about last class",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What were they?",
                  option1: "Goalie, Dancing, Eating, and Running pronouns",
                  option2: "Happy, Sad, Angry, and Sleepy pronouns",
                  option3: "Subject, Object, Reflexive, and Relative pronouns",
                  option4: "Cars, Bikes, School, and Book pronouns",
                  answer: "3",
                },
                {
                  quiz:
                    "What is the main difference between a subject pronoun and an object pronoun?",
                  option1:
                    "A subject pronoun comes before the verb, but an object pronoun comes after the verb",
                  option2:
                    "A subject pronoun comes after the verb, but an object pronoun comes before the verb",
                  option3:
                    "A subject pronoun is placed in the middle of the sentence, but an object pronoun is placed in the beginning of the sentence",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a reflexive pronoun?",
                  option1:
                    "It is one that tells what one does for or to oneself",
                  option2: "It is one that tells what oneself is doing",
                  option3: "It is one that tells what oneself is not doing",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a relative pronoun?",
                  option1:
                    "It is one that replaces the antecedent and tells more about that antecedent",
                  option2: "It is one that replaces the antecedent only",
                  option3:
                    "It is one that tells more about the antecedent only",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How do we use commas with quotes in a dialogue?",
                  option1:
                    "We put commas outside the opening quotation marks but inside the closing quotation marks",
                  option2:
                    "We put commas inside the opening quotation marks but outside the closing quotation marks",
                  option3:
                    "We put commas outside the opening quotation marks and outside the closing quotation marks",
                  option4:
                    "We put commas inside the opening quotation marks and inside the closing quotation marks",
                  answer: "1",
                },
                {
                  quiz: "How do we use quotation marks in a dialogue?",
                  option1:
                    "We use them before and after the exact words that a speaker says or writes",
                  option2:
                    "We use them only before the exact words that a speaker says or writes",
                  option3:
                    "We use them only after the exact words that a speaker says or writes",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What is the first thing to write when writing a scene?",
                  option1: "The dialogue",
                  option2: "The setting",
                  option3: "The scene number",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "August 19, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Take Action",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3:
                    "What can people do to bring about a positive change?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "20",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About what Frederick Douglass did to bring about a positive change for African Americans",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "2",
                },
                {
                  quiz:
                    "What did Frederick Douglass do to bring about a positive change for African Americans?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "Some said it was a calculator and others said it was a language",
                  option4:
                    "Spoke against slavery, exposed the horrors of slavery, wrote a book, started his own abolitionist newspaper, and worked tirelessly to end segregation.",
                  answer: "4",
                },
                {
                  quiz: "What should summaries say?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "As you read and or in the end",
                  option3: "Only what is in the text",
                  option4: "Only in the end",
                  answer: "3",
                },
                {
                  quiz: "How do you find the author's point of view?",
                  option1:
                    "By finding the key details of each section of the text and summarizing what do they have in common",
                  option2: "To be happy",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "1",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It told facts about the life of Fredrick Douglass, described its talents and achievements, and was written in logical order",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between a prefix and a suffix?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3:
                    "A prefix is a word part added to the beginning of another word to change its meaning, meanwhile a suffix is added to the end",
                  option4: "Paragraph clues",
                  answer: "3",
                },
              ],
            },
            {
              name: "August 26, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What did we learn about homographs last class?",
                  option1: "They are spelled the same",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What else did we learn about homographs last class?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "May sound the same or not",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the last thing we learned about homographs last class?",
                  option1: "Differ in meaning",
                  option2: "Must be different words",
                  option3: "Have the same meaning",
                  option4: "Always sound the same",
                  answer: "1",
                },
                {
                  quiz: "How do pronouns and verbs agree?",
                  option1: "They never agree in any ways",
                  option2: "They don't need to agree",
                  option3: "They agree in number and gender",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you form pronoun-verb contractions?",
                  option1:
                    "By putting a pronoun and verb together and using an apostrophe to replace the omitted letters",
                  option2:
                    "By putting a pronoun and verb together and leaving no letter out",
                  option3: "By replacing a pronoun with a verb together",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "Can you abbreviate state names on envelopes?",
                  option1: "Yes",
                  option2: "No",
                  option3: "Never",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods on abbreviations that are read like words?",
                  option1: "No",
                  option2: "Yes",
                  option3: "Always",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods with abbreviations of measure units in the metric system?",
                  option1: "No",
                  option2: "Sometimes",
                  option3: "Yes",
                  option4: "Always",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you double the period at the end of a sentence ending with an abbreviation?",
                  option1: "No",
                  option2: "Always",
                  option3: "Sometimes",
                  option4: "Yes",
                  answer: "1",
                },
                {
                  quiz: "How do you write a good informative text?",
                  option1: "Use repetition, rhyme, and stanzas",
                  option2:
                    "Use figurative language, informal voice, and dialogue",
                  option3:
                    "Develop the topic, use logical order text structure, and finish with a strong conclusion",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 2, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Consider Our Resources",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3: "Why are natural resources valuable?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "14",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4: "About the ways natural resources provide energy?",
                  answer: "1",
                },
                {
                  quiz: "How are natural resources valuable?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "The sun helps heat our planet, coal is burned to heat our homes, and oil is transformed into gasoline to power our cars",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "3",
                },
                {
                  quiz:
                    "What ways did the text suggest that individuals can save energy?",
                  option1:
                    "By asking and answering questions about those details",
                  option2:
                    "Turning off lights, TVs, computers, and other devices when they are not using them",
                  option3: "Only as you read",
                  option4: "Only in the end",
                  answer: "2",
                },
                {
                  quiz:
                    "What are some of the things you said you could do personally to save energy?",
                  option1: "To help us read well",
                  option2: "Use less appliances",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It explained why natural resources are valuable, presented information in logical order, and presented them in a chart",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2:
                    "Surrounding definition and restatement context clues",
                  option3: "Same sentence context clues",
                  option4: "Paragraph clues",
                  answer: "2",
                },
              ],
            },
            {
              name: "September 16, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What sound did we learn to read last class?",
                  option1: "Open syllable",
                  option2: "r-controlled vowel syllables",
                  option3: "Closed syllable",
                  option4:
                    "The sound of the letters ture, cher, tcher, and zure",
                  answer: "4",
                },
                {
                  quiz: "What kind of pronouns did we learn last class?",
                  option1: "Irregular verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "Possessive pronouns and reflexive pronouns",
                  answer: "4",
                },
                {
                  quiz: "What did we say about apostrophes?",
                  option1:
                    "They are used in dialogues, making the possessive, and contractions",
                  option2: "They link the subject and a word in the predicate",
                  option3: "They help the main verb",
                  option4:
                    "They do not end in -ed to form the past tense and have special spellings when used with have in the perfect or progressive tenses",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about summarizing a text?",
                  option1: "Have ride",
                  option2:
                    "We said we use the most important ideas from the text and do not include our own opinions",
                  option3: "Have ridden",
                  option4: "Have rid",
                  answer: "2",
                },
                {
                  quiz:
                    "What did we learn about how to find the author's point of view?",
                  option1: "Pay attention to the words that the author chose",
                  option2: "Have take",
                  option3: "Have took",
                  option4: "Have taked",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about writing an opinion essay?",
                  option1: "Have be",
                  option2:
                    "It should start with a strong opening, provide reasons and evidence, and use transitions",
                  option3: "Have is",
                  option4: "Have was",
                  answer: "2",
                },
                {
                  quiz: "Which of the following are reflexive pronouns?",
                  option1: "Him, her, and them",
                  option2: "He, she, and it",
                  option3: "Myself, hisself, and yourself",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come before the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "Hers and his",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come after the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "We and they",
                  answer: "3",
                },
                {
                  quiz: "What is the use of a chart?",
                  option1:
                    "Use precise language, use transitions, and include reasons and evidence",
                  option2: "Write many conclusions",
                  option3:
                    "It represents facts visually to allow readers to compare and contrast information",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 23, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Making It Happen",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3: "How do you prepare for a picnic?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "4",
                },
                {
                  quiz: "What is a lyric poetry?",
                  option1: "It is a poem that contains rhyme and alliteration",
                  option2: "It is a short poem",
                  option3: "It is a poem that tells a story",
                  option4: "It is a long poem",
                  answer: "1",
                },
                {
                  quiz: "What is a free verse?",
                  option1: "It is a poem that tells a story",
                  option2: "It is a long poem",
                  option3: "It is a short poem",
                  option4:
                    "It is a poem that has no rhyming pattern, meter or line length",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a poem?",
                  option1:
                    "It is the repeated use of words, sounds or phrases for effect or emphasis",
                  option2: "It is the repeated use of punctuations",
                  option3: "By identifying poetic elements and key details",
                  option4: "It is the repeated use of the same title",
                  answer: "3",
                },
                {
                  quiz: "What is rhyme in poetry?",
                  option1: "It is the repetition of the same consonant sound",
                  option2: "It is the repetition of the same vowel sound",
                  option3: "It is the repetition of the same word",
                  option4: "It is the repetition of the same letter",
                  answer: "2",
                },
                {
                  quiz: "What is alliteration?",
                  option1:
                    "They're words that are spelled the same and have the same meaning",
                  option2:
                    "It is the presence of the same consonant sound in the beginning of two or more words",
                  option3:
                    "They're words that are spelled the same but have different meanings and may or may not have the same pronunciation",
                  option4:
                    "They're words that are not spelled the same but have the same meaning",
                  answer: "2",
                },
                {
                  quiz: "What is meter in poetry?",
                  option1:
                    "It is the rhythm or regular pattern of sounds in a line",
                  option2: "It's the same as its denotation",
                  option3: "Guess it from its letters",
                  option4: "Use context clues to figure out the meaning",
                  answer: "1",
                },
                {
                  quiz: "What is stanza in poetry?",
                  option1: "Foreshadowing and Imagery",
                  option2: "Effect and Emphasis",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between simile and metaphor?",
                  option1: "In unity there's strength",
                  option2: "It takes two to tango",
                  option3: "Hope is the source of life",
                  option4:
                    "Simile uses words like or as to make a comparison, but metaphor makes a comparison without them",
                  answer: "4",
                },
              ],
            },
            {
              name: "September 30, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "3",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "16",
                  answer: "1",
                },
                {
                  quiz: "How is making predictions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us read with purpose",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast characters.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is realistic fiction?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it features events and settings typical of the time period in which the story is set",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is an idiom?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is an expression that cannot be defined by the words in it",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3:
                    "They are words that sound the same, but are spelled differently and have different meaning",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What is a dependent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an independent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "October 14, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "4",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "3",
                },
                {
                  quiz: "How did Miguel change after entering Middle School?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What caused him to change?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "He became friend with Jake",
                  answer: "4",
                },
                {
                  quiz:
                    "How can making predictions help us better understand the text?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What can you compare and contrast in a story?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is Realistic Fiction?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3:
                    "It is where characters and settings may actually exist in real life",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "What context clues did we talk about in the class?",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Comparisons",
                  answer: "4",
                },
              ],
            },
            {
              name: "October 21, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce the suffixes less, ist, ion, and ful, and how to use their meaning to infer unfamiliar words based of them",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix less?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the suffix ist?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means person who studies",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the suffix ion?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means the act of",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix ful?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means full of",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What did we learn under grammar last class?",
                  option1: "Adjectives",
                  option2: "Present tense verbs",
                  option3: "Pronouns",
                  option4:
                    "Independent and dependent clauses, and appositives and commas",
                  answer: "4",
                },
                {
                  quiz:
                    "What is the difference between an independent clause and a dependent clause?",
                  option1:
                    "The former has many words but the latter has few words",
                  option2:
                    "The former can stand on its own meanwhile the latter cannot",
                  option3: "The former is a clause but the other is not",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "What is the relationship between appositives and commas?",
                  option1:
                    "Commas appear before and immediately after appositives",
                  option2: "Commas only appear before appositives",
                  option3: "Commas only appear after appositives",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing opening linking word?",
                  option1: "As you can see",
                  option2: "Lastly",
                  option3: "First",
                  option4: "I believe",
                  answer: "4",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing closing linking word?",
                  option1: "As you can see",
                  option2: "Third",
                  option3: "Also",
                  option4: "The next",
                  answer: "1",
                },
              ],
            },
            {
              name: "October 28, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "3",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "16",
                  answer: "1",
                },
                {
                  quiz: "How is making predictions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us read with purpose",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast characters.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is realistic fiction?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it features events and settings typical of the time period in which the story is set",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is an idiom?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is an expression that cannot be defined by the words in it",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "assume"?',
                  option1: "To dance",
                  option2: "To play",
                  option3: "To infer or conclude",
                  option4: "To race",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "rely"?',
                  option1: "To play with something",
                  option2: "To depend on something",
                  option3: "To eat something",
                  option4: "To write something",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "nominate"?',
                  option1: "To appoint to a position",
                  option2: "To demote",
                  option3: "To promote",
                  option4: "To layoff",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 4, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3:
                    "They are words that sound the same, but are spelled differently and have different meaning",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What is a dependent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an independent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: 'What was the meaning of the word "guarantee"?',
                  option1: "To say ok",
                  option2: "To refuse",
                  option3: "To give a promise",
                  option4: "To run away",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "obviously"?',
                  option1: "To be afraid",
                  option2: "To be overt or easily seen",
                  option3: "To give",
                  option4: "To take",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "supportive"?',
                  option1: "To give support",
                  option2: "To take away",
                  option3: "To play around",
                  option4: "To race with",
                  answer: "1",
                },
                {
                  quiz: 'What was the meaning of the word "sympathy"?',
                  option1: "To denigrate",
                  option2: "To loath",
                  option3: "To hate",
                  option4: "To show compassion",
                  answer: "4",
                },
                {
                  quiz: 'What was the meaning of the word "assume"?',
                  option1: "To dance",
                  option2: "To play",
                  option3: "To infer or conclude",
                  option4: "To race",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "rely"?',
                  option1: "To play with something",
                  option2: "To depend on something",
                  option3: "To eat something",
                  option4: "To write something",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "nominate"?',
                  option1: "To appoint to a position",
                  option2: "To demote",
                  option3: "To promote",
                  option4: "To layoff",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 11, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Our Changing Earth",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "What changes in the environment affect living things?",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "4",
                },
                {
                  quiz:
                    "How is asking and answering questions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast ideas.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is expository text?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is a graph?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are photographs?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are captions?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "They are words that add information to a photograph",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: 'What is the meaning of the prefix "dis"?',
                  option1: "It means not or absence of or opposite of",
                  option2: "It means before",
                  option3: "It means wrong",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 18, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "CHANGING VIEWS OF EARTH",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About how our understanding of Earth has changed along with scientific developments over time",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "How can scientific knowledge change over time?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz:
                    "What was the effect of flight on our knowledge about Earth?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4:
                    "Permitted to launch satellites in space to achieve new breakthroughs",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Helps stay focused",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you call cause and effect events where the effect of the previous event is the cause of the current one?",
                  option1: "Cause-Effect Chain",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "1",
                },
                {
                  quiz: "What is a diagram?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3:
                    "It’s a drawing that shows the different parts of something and how they relate to each other",
                  option4: "Repetition of shoes and cars",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "geo"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Earth",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "helio"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Sun",
                  option4: "Igneous Rock",
                  answer: "3",
                },
              ],
            },
            {
              name: "November 25, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Scientific Viewpoints",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "What benefits come from people working as a group?",
                  option4:
                    "How do natural events and human activities affect the environment?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "11",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About two different views on the arrival of new species into the U.S.",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "What where the uses of species introduced in the U.S.?",
                  option1:
                    "Some like horses were used for work, transportation, and recreation",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz:
                    "What where the harmful effects of species introduced in the U.S.?",
                  option1:
                    "Some like the Med. Fruit Fly destroyed native plants like citrus.",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What did we say about how you make sure to understand a persuasive article last class?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "By asking and answering questions",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What skill did we learn that you can use to understand a persuasive article last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Author's Point of View",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to persuade me to agree with the author's viewpoint with some evidence and a chart",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Biography",
                  option3: "Persuasive Article ",
                  option4: "Expository Text",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 2, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What root word did we learn last class?",
                  option1: "div",
                  option2: "ope",
                  option3: "nat",
                  option4: "nativus",
                  answer: "4",
                },
                {
                  quiz: "What other root word did we learn last class?",
                  option1: "cal",
                  option2: "spec",
                  option3: "elon",
                  option4: "circ",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the root avis?",
                  option1: "It means us",
                  option2: "It means fruit",
                  option3: "It means bird",
                  option4: "It means snake",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the root nativus?",
                  option1: "It means cheer up",
                  option2: "It means walking up",
                  option3: "It means happy",
                  option4: "It means to be born",
                  answer: "4",
                },
                {
                  quiz: "What grammar did we learn?",
                  option1: "Prepositions",
                  option2: "locatives",
                  option3: "Irregular Comparative and Superlative",
                  option4: "SVP",
                  answer: "3",
                },
                {
                  quiz: "What were the 2 sounds of suffix -ion?",
                  option1: "up and down",
                  option2: "ee and e",
                  option3: "o and a",
                  option4: "shuhn and zhuhn",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the word nonnative?",
                  option1: "Born in the country of residence",
                  option2: "Not born in the country of residence",
                  option3: "Born in February",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the word species?",
                  option1: "A group of animals with the same habits",
                  option2: "A group of animals not having the same habits",
                  option3: "A group of animals with some similar habits",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What is the meaning of the word avian?",
                  option1: "Fruit",
                  option2: "Food",
                  option3: "Transportation",
                  option4: "Bird",
                  answer: "4",
                },
                {
                  quiz: "What is the prefix -ion used for?",
                  option1: "To make the noun of a verb",
                  option2: "To make the adjective of a verb",
                  option3: "To make the predicate of a verb",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 9, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What unit did we introduce last class?",
                  option1: "Unit 2",
                  option2: "Unit 3",
                  option3: "Unit 5",
                  option4: "Unit 6",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the big idea of the unit we introduced last class?",
                  option1: "How to learn and study",
                  option2: "How to be a good friend",
                  option3: "How do we help each other",
                  option4: "How are we all connected",
                  answer: "4",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Joining forces",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4: "How do different groups contribute to a cause?",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read about last class?",
                  option1:
                    "How a young girl learns how to contribute to for her community",
                  option2:
                    "How a young girl learns how to contribute to the war effort during the first World War",
                  option3:
                    "How a young girl learns how to contribute during the great recession",
                  option4:
                    "How a young girl learns how to contribute to the war effort during World War II",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "drills"?',
                  option1: "Sleeping",
                  option2: "Practice",
                  option3: "Playing",
                  option4: "Eating",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "enlisted"?',
                  option1: "Play",
                  option2: "Register",
                  option3: "Drive a car",
                  option4: "Play with a toy",
                  answer: "2",
                },
                {
                  quiz: "How is summarizing while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you find the theme of stories like the one we read last class?",
                  option1: "By comparing and contrasting phonics",
                  option2: "By comparing and contrasting grammar",
                  option3:
                    "By paying attention to what the characters do and say and what happens to them.",
                  option4: "By comparing and contrasting letters",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 16, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "How will you know a text is historical fiction?",
                  option1:
                    "If it features events and settings typical of the period in which the story is set.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "1",
                },
                {
                  quiz: "What is a Flashback?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3:
                    "It is a description of events and actions that occurred before the main action of the story",
                  option4: "It is an expression that has no meaning",
                  answer: "3",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4:
                    "They are words that sound the same but are spelled differently and have different meanings",
                  answer: "4",
                },
                {
                  quiz: "What part of speech are words with the -ion suffix?",
                  option1: "Verbs",
                  option2: "Nouns",
                  option3: "Adjectives",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an Adverb?",
                  option1: "It is a word that tells more about the verb",
                  option2: "It is an adjective",
                  option3: "It is a different verb",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What were the 3 features we learned a good narrative text should have last class?",
                  option1:
                    "Sequence, Develop Character and Figurative Language",
                  option2:
                    "Cause-Effect Chain, Author's point of view and Main Idea",
                  option3: "Similarities, Differences and Definitions",
                  option4: "Drama, Expository and Informational",
                  answer: "1",
                },
                {
                  quiz: "What was the text we wrote last class about?",
                  option1:
                    "About Libby's reaction to her father's comment on her poem in a letter addressed to her",
                  option2:
                    "About Libby's reaction to her brother's comment on her poem in a letter addressed to her",
                  option3:
                    "About Libby's reaction to her sister's comment on her poem in a letter addressed to her",
                  option4:
                    "About Libby's reaction to her friend's comment on her poem in a letter addressed to her",
                  answer: "1",
                },
                {
                  quiz: "What text structure did we use in writing our answer?",
                  option1: "Sequence",
                  option2: "Cause-Effect",
                  option3: "Theme",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What did we do to make the text interesting?",
                  option1: "We developed the character",
                  option2: "We played around",
                  option3: "We wrote about apples",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What else did we add to spice up our text?",
                  option1: "Figurative Language",
                  option2: "Present Continuous",
                  option3: "Simple Present",
                  option4: "Simple Past",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 23, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What was the weekly concept of the new lesson last class?",
                  option1: "Getting Along",
                  option2: "Praying Together",
                  option3: "Helping Each Other",
                  option4: "Eating Together",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the essential question of the new lesson last class?",
                  option1: "What actions can we take to get along with others?",
                  option2: "What actions can we take to pray together?",
                  option3: "What actions can we take to help each other?",
                  option4: "What actions can we take to eat together?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "16",
                  option2: "14",
                  option3: "12",
                  option4: "8",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "The Bully",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3: "About how one student tries to deal with a bully",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "How did Ramon's advice affected Michael's problem with J.T.?",
                  option1: "It helped him kick J.T.",
                  option2:
                    "It helped him solve his feud with J.T. and they eventually became friends",
                  option3: "It helped him punch J.T.",
                  option4: "It helped him yell at J.T.",
                  answer: "2",
                },
                {
                  quiz:
                    "What advice would you give to someone being bullied and why?",
                  option1:
                    "Tell that person to report to his or her parents for protection",
                  option2: "Ask that person to cry out for relief",
                  option3: "Ask that person to fight back to gain respect",
                  option4:
                    "Report to the teacher for he or she can counsel both",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn and practice in this class?",
                  option1: "Connotation and Denotation?",
                  option2: "Context Clues",
                  option3: "Homophones",
                  option4: "Antonyms",
                  answer: "1",
                },
                {
                  quiz:
                    "What phonics skill did we learn and practice in this class?",
                  option1: "Words with Latin Roots",
                  option2: "Words with Greek Roots",
                  option3: "Words from Mythology",
                  option4: "Words Spanish",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 30, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "Mysterious Oceans",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2:
                    "How are living things adapted to their environment?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "What was a way sea creatures adapt to the deep ocean?",
                  option1: "By singing",
                  option2: "Through playing",
                  option3: "By sleeping",
                  option4: "Actively forage for food",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Help check our understanding of complex ideas",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you figure out cause and effect relationships in a text?",
                  option1: 'By looking for cues such as "because of" ',
                  option2: "By closing the book",
                  option3: "By rewriting the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a map?",
                  option1: "It's a photo",
                  option2: "it's a picture",
                  option3: "It’s the flat picture of an area",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "dormant"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Running",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "agile"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Move quickly and easily",
                  answer: "4",
                },
              ],
            },
            {
              name: "January 6, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonics skill did we practice in this class?",
                  option1: "Syllabication",
                  option2: "Inflectional Endings",
                  option3: "Rhymes",
                  option4: "Words from Mythology",
                  answer: "4",
                },
                {
                  quiz: "Where did the meaning of the word Fortune come from?",
                  option1: "From Janus Roman god of beginnings",
                  option2:
                    "From Atlas Greek giant who supported the world on his shoulders",
                  option3: "From Luna Roman goddess of the moon",
                  option4: "From Fortuna Roman goddess of luck",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar skill did we learn and practice in this class?",
                  option1: "Homophones",
                  option2: "Negatives and Negative Contractions",
                  option3: "Antonyms",
                  option4: "Plurals",
                  answer: "2",
                },
                {
                  quiz: "What did we say were Negatives?",
                  option1: "Negatives are words that mean yes",
                  option2: "Negatives are words that mean happy",
                  option3: "Negatives are words that mean run",
                  option4: "Negatives are words that mean no",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar usage did we learn and practice in this class?",
                  option1: "Capitalization in emails",
                  option2: "Capitalization in letters",
                  option3: "How to correct Double Negatives",
                  option4: "How to use plurals",
                  answer: "3",
                },
                {
                  quiz: "What did we say was double negative?",
                  option1: "When there are two negatives in the same clause.",
                  option2: "When there are three negatives in the same clause.",
                  option3: "When there are no negatives in the same clause.",
                  option4: "When there are four negatives in the same clause.",
                  answer: "1",
                },
                {
                  quiz: "What is one way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By changing 1 negative to a positive",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What is another way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By eliminating one of the negative words",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What type of essay did we learn in this class?",
                  option1: "Dialogue",
                  option2: "Informative Text",
                  option3: "Opinon Essay",
                  option4: "Realistic Fiction",
                  answer: "2",
                },
                {
                  quiz:
                    "What were the 3 key points we practiced during the writing?",
                  option1:
                    "Develop a Topic, Use good Sentence Structures, and a Strong Conclusion",
                  option2: "Use Figurative Language only",
                  option3: "pay attention to verbs",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 13, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this class?",
                  option1: "Making a Difference",
                  option2: "Working Hard",
                  option3: "Prayers",
                  option4: "Bravery",
                  answer: "1",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "What impact do our actions have on our world?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "How many vocabulary did we learn in this class?",
                  option1: "12",
                  option2: "11",
                  option3: "10",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "Words to Save the World",
                  option4: "Mysterious Oceans",
                  answer: "3",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how the biologist Rachel Carson used the power of writing to change the world",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "2",
                },
                {
                  quiz:
                    "What impact did the publication of Silent Spring have on the makers of pesticides such as DDT?",
                  option1: "It made them struggle to counter Rachel's claims",
                  option2: "It made them cry",
                  option3: "It made them make more money",
                  option4: "It made them close their companies",
                  answer: "1",
                },
                {
                  quiz: "When to ask and answer questions about a text?",
                  option1: "During reading only",
                  option2: "After reading only",
                  option3: "Before, during, and after reading",
                  option4: "Only before reading",
                  answer: "3",
                },
                {
                  quiz: "Why did Rachel write about pesticide abuse?",
                  option1: "Because their friend reported its harm",
                  option2: "Because their friend said how good they were",
                  option3: "Because their friend didn't like it",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What comprehension skill did we practice in this lesson?",
                  option1: "Problem and solution",
                  option2: "Antonyms",
                  option3: "Synonyms",
                  option4: "Paragraphs",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 20, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What special feature of a biography did we learn and practice in this class?",
                  option1: "Illustrations",
                  option2: "Maps",
                  option3: "Graphs",
                  option4: "Maps",
                  answer: "1",
                },
                {
                  quiz:
                    "What 3 details helped us understand the subject of the biography we read in this lesson?",
                  option1:
                    "The illustration on page 425, that on page 426, and the one on page 427",
                  option2:
                    "The illustration on page 420, that on page 421, and the one on page 422",
                  option3:
                    "The map on page 425, that on page 426, and the one on page 427",
                  option4:
                    "The graph on page 425, that on page 426, and the one on page 427",
                  answer: "1",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words in this class?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
                {
                  quiz: "What are synonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "1",
                },
                {
                  quiz: "What are antonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "2",
                },
                {
                  quiz:
                    "How do antonyms and synonyms help you better understand the meaning of unfamiliar words?",
                  option1:
                    "The relationship between synonyms and antonyms in different texts can help you better understand the meaning of unfamiliar words",
                  option2:
                    "The relationship between synonyms and antonyms in different magazines can help you better understand the meaning of unfamiliar words",
                  option3:
                    "The relationship between synonyms and antonyms in the same sentence or paragraph can help you better understand the meaning of unfamiliar words",
                  option4:
                    "The relationship between synonyms and antonyms in different newspapers can help you better understand the meaning of unfamiliar words",
                  answer: "3",
                },
                {
                  quiz: "What number prefixes did we learn in this class?",
                  option1: "Fr-, Df-, Lo-, Co-",
                  option2: "On-, Tr-, Ez-, Yu-",
                  option3: "Un-, B-, Tr-, Ct-",
                  option4: "Uni-, Bi-, Tri-, Cent-",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Uni-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the number prefix Bi-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Cent-?",
                  option1: "Hundred",
                  option2: "Million",
                  option3: "Ten",
                  option4: "Grams",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 27, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this lesson?",
                  option1: "Out in the World",
                  option2: "Out in the Space",
                  option3: "On a Holiday",
                  option4: "At Home",
                  answer: "1",
                },
                {
                  quiz: "What was the Essential Question of this lesson?",
                  option1: "What can our connections to the world teach us",
                  option2: "How do we contribute to a cause?",
                  option3: "What is best for our environment?",
                  option4: "Can we live without the sun?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn in this lesson?",
                  option1: "10",
                  option2: "9",
                  option3: "8",
                  option4: "7",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text of this lesson?",
                  option1: "Poetry",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What types of poems did we discuss in this lesson?",
                  option1: "Active and Passive",
                  option2: "Figurative and Dormant",
                  option3: "Plain and Story",
                  option4: "Lyric and Narrative",
                  answer: "4",
                },
                {
                  quiz:
                    "How do we find the point of view of the speaker in a poem?",
                  option1: "By closing the book",
                  option2: "By summarizing the text",
                  option3:
                    "By paying attention to the speaker's word choice and thoughts expressed",
                  option4: "By reading the whole text",
                  answer: "3",
                },
                {
                  quiz: "What is Assonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of a consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "1",
                },
                {
                  quiz: "What is Consonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of the middle or final consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "2",
                },
                {
                  quiz: "What is personification?",
                  option1: "It is use of human qualities to describe humans",
                  option2:
                    "It is use of human qualities to describe living things",
                  option3:
                    "It is use of human qualities to describe animals, things, or events",
                  option4: "It is use of human qualities to describe people",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the qualities of a good poem as we learned in this lesson?",
                  option1:
                    "Should feature Strong Words, Personification, and Figurative Language",
                  option2:
                    "Should feature Good Grammar, Long Sentences, and No Prepositions",
                  option3:
                    "Should feature No Verbs, No Subject, and No Predicate",
                  option4: "All of the above",
                  answer: "1",
                },
              ],
            },
          ],
        },
        {
          quizName: "FriEve",
          tests: [
            {
              name: "April 29, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "Growing in Place",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  option4:
                    "About how Ping follows a plan to find a lost brocade",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "What was the first important event in Lucy Braun's life which affected her future life?",
                  option1:
                    "She continued adding plants to her own herbarium all her life",
                  option2:
                    "In high school, she started collecting and drying plants for her own herbarium",
                  option3: "Even as a child, Lucy was interested in plants",
                  option4:
                    "In the university, she studied geology and botany, and became interested in ecology as well",
                  answer: "3",
                },
                {
                  quiz:
                    "What was the second important event in Lucy Braun's life which affected her future life?",
                  option1:
                    "In the university, she studied geology and botany, and became interested in ecology as well",
                  option2: "Even as a child, Lucy was interested in plants",
                  option3:
                    "In high school, she started collecting and drying plants for her own herbarium",
                  option4:
                    "She continued adding plants to her own herbarium all her life",
                  answer: "3",
                },
                {
                  quiz:
                    "What was the third important event in Lucy Braun's life which affected her future life?",
                  option1:
                    "In high school, she started collecting and drying plants for her own herbarium",
                  option2:
                    "After starting collecting and drying plants for her own herbarium, she continued adding in plants all her life",
                  option3: "Even as a child, Lucy was interested in plants",
                  option4:
                    "In the university, she studied geology and botany, and became interested in ecology as well",
                  answer: "2",
                },
                {
                  quiz:
                    "What was the fourth important event in Lucy Braun's life which affected her future life?",
                  option1:
                    "In the university, she studied geology and botany, and became interested in ecology as well",
                  option2: "Even as a child, Lucy was interested in plants",
                  option3:
                    "She continued adding plants to her own herbarium all her life",
                  option4:
                    "In high school, she started collecting and drying plants for her own herbarium",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the fifth important event in Lucy Braun's life which affected her future life?",
                  option1: "Later in her life, Lucy wrote many field guides",
                  option2:
                    "While teaching botany in the university in 1917, together with her sister Annette, they turned part of their home into a science wing, and Lucy collected plants from all around the country",
                  option3: "In 1950, she published her most important guide",
                  option4: "She got a few plants named after her",
                  answer: "2",
                },
                {
                  quiz:
                    "What was the sixth important event in Lucy Braun's life which affected her future life?",
                  option1:
                    "Later in her life, Lucy wrote many field guides, and in 1950, she published her most important guide",
                  option2: "She got a few plants named after her",
                  option3: "In 1950, she published her most important guide",
                  option4: "Later in her life, Lucy wrote many field guides",
                  answer: "1",
                },
              ],
            },
            {
              name: "May 6, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 13, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Playing outside",
                  option2: "Running in the bush",
                  option3: "A plan of action",
                  option4: "A gift for you",
                  answer: "3",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Effects of technology in our lives",
                  option2: "What can different cultures teach us?",
                  option3: "How can learning about nature help us?",
                  option4: "When has a plan helped you accomplish a task?",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story?",
                  option1: "Survivaland",
                  option2: "The Magical Lost Brocade",
                  option3: "RESCUE",
                  option4: "Foul Shot",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the story?",
                  option1: "Folktale",
                  option2: "Biography",
                  option3: "Realistic Fiction",
                  option4: "Fantasy",
                  answer: "1",
                },
                {
                  quiz:
                    "How did following the plan help Ping find the Magical Lost Brocade?",
                  option1:
                    "The plan helped him brave the Fire Valley, Ice Ocean and the Mountain of the Sun safely",
                  option2: "The plan helped him see each place",
                  option3:
                    "The plan helped him convince the Fire Valley not to burn him",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "How do we know if our prediction of events coming up next in the plot is correct?",
                  option1: "By asking our parents",
                  option2: "By asking the teaching",
                  option3:
                    "We use evidence from the story to see if our prediction is correct",
                  option4: "By asking our friends",
                  answer: "3",
                },
                {
                  quiz: "If our prediction isn't correct, what do we do?",
                  option1: "We can do nothing",
                  option2: "We can forget about it",
                  option3: "We can just leave like that",
                  option4: "We can revise it",
                  answer: "4",
                },
                {
                  quiz:
                    "What did the characters say and do that help find the theme of the story?",
                  option1:
                    "Ping assured his mom to bring back the Magical Lost Brocade, and the wiseman he met told him a plan to follow to get to the Palace where the Magical Lost Brocade was",
                  option2: "Ping said he was going to have fun",
                  option3:
                    "Ping said it was too hard, and that he won't make it",
                  option4: "Ping declared he can not do it",
                  answer: "1",
                },
                {
                  quiz: "What happened to Ping in the story?",
                  option1: "He stayed home and slept",
                  option2:
                    "He went through the scorching fire without saying a word, crossed the freezing cold Ice Ocean without shivering, and climbed the steep Mountain of the Sun successfully",
                  option3: "He spent his time watching TV",
                  option4: "He helped his mom weave a new Brocade",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "Do not fulfill your promise",
                  option2: "A promise is nothing",
                  option3: "A promise is a debt",
                  option4: "A promise is just another simple sentence",
                  answer: "3",
                },
              ],
            },
            {
              name: "May 20, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    'What did the character do in "The Magical Lost Brocade" that help figure out the theme of the story?',
                  option1:
                    "Ping left their home to go look for the Magical Lost Brocade assuring his mom to bring it back",
                  option2:
                    "Ping was very excited about the idea and started laughing",
                  option3: "Ping ran to the lake",
                  option4: "Ping ate ice cream that day",
                  answer: "1",
                },
                {
                  quiz:
                    'What did the character say in "The Magical Lost Brocade" that help figure out the theme of the story?',
                  option1: "Ping said he will not do it",
                  option2: 'Ping said, "I can not do it"',
                  option3:
                    'Ping said, "It sounds like an extremely difficult journey but I\'ll do my very best"',
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "In unity there is strength",
                  option2: "A promise is a debt",
                  option3: "An apple a day keeps the doctor away",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    'Why is "The Magical Lost Brocade" considered a Folktale?',
                  option1:
                    "Because it has characters, events and settings that exist in real life",
                  option2: "Because it has a made-up setting",
                  option3: "Because it has characters and events that are real",
                  option4:
                    'Because it describes the set of tasks, the hero, Ping, must accomplish in order to find the "Magical Lost Brocade", crossing the obstacles is repeated, and there are instances of imagery and foreshadowing in the story.',
                  answer: "4",
                },
                {
                  quiz: "What is foreshadowing?",
                  option1:
                    "It is giving hints at what will happen next in the plot",
                  option2: "It is more explanation of the text",
                  option3: "It is the denotation of expressions ",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is imagery?",
                  option1: "It is a paragraph that stand on its own",
                  option2: "It is phrases that do not have a verb",
                  option3: "It is sentences that do not have a period",
                  option4:
                    "It is words and phrases that help create pictures in a reader's mind",
                  answer: "4",
                },
                {
                  quiz: "What is personification?",
                  option1: "It is calling an animal a person",
                  option2:
                    "It is giving human qualities to animals, objects, things, or events to help readers better picture it",
                  option3: "It is transforming an object into a person",
                  option4: "It is turning a thing or event into a person",
                  answer: "2",
                },
                {
                  quiz: "What are contractions?",
                  option1: "They are words formed by adding -ed",
                  option2: "They are words formed by adding -ing",
                  option3: "They are words formed by combining two words",
                  option4:
                    "They're words formed by replacing a vowel or consonant and vowel with an apostrophe",
                  answer: "4",
                },
                {
                  quiz: "What is a possessive noun?",
                  option1: "It is a noun that can be replaced by a verb",
                  option2: "It is a noun that is also a verb",
                  option3:
                    "It is a noun that shows who or what owns or has something",
                  option4: "It is a noun that has multiple meaning",
                  answer: "3",
                },
                {
                  quiz:
                    "How to make the possessive of a singular noun or plural noun?",
                  option1: "For all of them, add 's to make them possessive",
                  option2:
                    "For singular nouns and special plural nouns, add 's to make them possessive, and for most plural nouns, add just an ' to make them possessive",
                  option3:
                    "For all of them, just add ' to make them possessive",
                  option4:
                    "For all of them, just add s to make them possessive",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 27, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Making It Happen",
                  option2: "Different Cultures Teach Us",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3: "How do you prepare for a picnic?",
                  option4: "Can the sun walk?",
                  answer: "2",
                },
                {
                  quiz: "What is a narrative poem?",
                  option1: "It is a poem that does not have a rhyming pattern",
                  option2: "It is a short poem",
                  option3: "It is a poem that tells a story",
                  option4: "It is a long poem",
                  answer: "3",
                },
                {
                  quiz: "What is a free verse?",
                  option1: "It is a poem that tells a story",
                  option2: "It is a long poem",
                  option3: "It is a short poem",
                  option4: "It is a poem that does not have a rhyming pattern",
                  answer: "4",
                },
                {
                  quiz: "What is repetition in poetry?",
                  option1:
                    "It is the repeated use of words, sounds or phrases for effect or emphasis",
                  option2: "It is the repeated use of punctuations",
                  option3: "It is the repeated use of a particular grammar",
                  option4: "It is the repeated use of the same title",
                  answer: "1",
                },
                {
                  quiz: "What is rhyme in poetry?",
                  option1: "It is the repetition of the same consonant sound",
                  option2: "It is the repetition of the same vowel sound",
                  option3: "It is the repetition of the same word",
                  option4: "It is the repetition of the same letter",
                  answer: "2",
                },
                {
                  quiz: "What are homographs?",
                  option1:
                    "They're words that are spelled the same and have the same meaning",
                  option2:
                    "They're words that are spelled the same but have different meanings and always have the same pronunciation",
                  option3:
                    "They're words that are spelled the same but have different meanings and may or may not have the same pronunciation",
                  option4:
                    "They're words that are not spelled the same but have the same meaning",
                  answer: "3",
                },
                {
                  quiz: "How do you find the contextual meaning of homographs?",
                  option1: "None of the below",
                  option2: "It's the same as its denotation",
                  option3: "Guess it from its letters",
                  option4: "Use context clues to figure out the meaning",
                  answer: "4",
                },
                {
                  quiz: "What two uses did we learn repetition have on poems?",
                  option1: "Foreshadowing and Imagery",
                  option2: "Effect and Emphasis",
                  option3: "Illustrating and Depicting",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the second poem?",
                  option1: "In unity there's strength",
                  option2: "It takes two to tango",
                  option3: "Hope is the source of life",
                  option4: "Too many cooks spoil the broth",
                  answer: "3",
                },
              ],
            },
            {
              name: "June 3, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What is a syllable?",
                  option1: "It's a long word",
                  option2:
                    "It's a unit of pronunciation having one consonant sound",
                  option3:
                    "It's a unit of pronunciation having one vowel sound",
                  option4: "It's a short word",
                  answer: "3",
                },
                {
                  quiz: "What is a closed syllable?",
                  option1:
                    "It's a syllable that ends with a consonant and a vowel",
                  option2: "It's a syllable that ends with a consonant",
                  option3: "It's a syllable that ends with a vowel",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "What are prepositional phrases?",
                  option1:
                    "They're phrases that start with an article and ends with a verb",
                  option2:
                    "They're phrases that start with a noun and ends with a verb",
                  option3:
                    "They're phrases that start with a preposition and ends with its object",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What are the uses of prepositional phrases?",
                  option1: "They can be used as a verb",
                  option2: "They can be used as an article",
                  option3: "They can be used a noun",
                  option4: "They can be used as an adjective or as an adverb",
                  answer: "4",
                },
                {
                  quiz: "Which way is how we can capitalize titles?",
                  option1: "Use numbers",
                  option2: "Use all lower case letters",
                  option3: "Use all capital letters",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "Which way is how we can capitalize titles?",
                  option1: "Use quotation marks for longer works",
                  option2: "Use quotation marks for all works",
                  option3: "Use quotation marks for shorter works",
                  option4: "Never use quotation marks for shorter works",
                  answer: "3",
                },
                {
                  quiz: "Which way is how we can capitalize titles?",
                  option1: "Always capitalize all the words",
                  option2: "Capitalize the first word and all the main words",
                  option3:
                    "Do not capitalize the first word and all the main words",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "Which way is how we can punctuate letters?",
                  option1: "Put a comma after the street number in the address",
                  option2: "No punctuation in the address",
                  option3:
                    "Put a period after the street number in the address",
                  option4: "Put a comma after the street name in the address",
                  answer: "2",
                },
                {
                  quiz: "Which way is how we can punctuate letters?",
                  option1:
                    "Put a comma after the greeting of a business letter and a colon after the greeting of a personal letter",
                  option2:
                    "Put a comma after the greeting of a personal letter and a colon after the greeting of a business letter",
                  option3:
                    "Put a period after the greeting of a personal letter or a business letter",
                  option4:
                    "Put a colon after the greeting of a personal letter or a business letter",
                  answer: "2",
                },
                {
                  quiz: "Which way is how we can punctuate letters?",
                  option1: "Always put a comma after the closing",
                  option2: "Never put a comma after the closing",
                  option3: "Sometimes put a comma after the closing",
                  option4: "Always put a period after the closing",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 10, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It said how Paul was excited about the vacation plan",
                  option2: "It said how Paul was packing for the travel",
                  option3: "It said how Paul was reluctant to travel",
                  option4:
                    "It said how Paul was telling his friends about his vacation plan",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It detailed how Paul's parents were reluctant to travel",
                  option2:
                    "It detailed how Paul expressed his anger toward the travel plan",
                  option3:
                    "It detailed how Paul's parents prepared to travel and how Paul discovered the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  option4:
                    "It detailed how Paul came to realize the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It talked about the food Uncle Art ordered for dinner and how Paul was attracted by it at first sight",
                  option2:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at first sight, but later came to like it",
                  option3:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at all",
                  option4:
                    "It talked about the food Uncle Art ordered for dinner and how Paul loved it and devoured it",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires",
                  option2:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires, and the music people loved to dance there compared to New York",
                  option3:
                    "It was about how Paul, his family, and relatives came to discover the music people loved to dance in Buenos Aires compared to New York",
                  option4:
                    "It was about how Paul, his family, and relatives couldn't discover the new sights, sounds, and languages spoken in Buenos Aires, including the music people loved to dance there",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family were scared",
                  option2:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned about the culture of soccer in Argentina",
                  option3:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family weren't impressed at all",
                  option4:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned nothing about the culture of soccer in Argentina",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It told how Paul found out that he loved soccer team colors and planned to paint his room in those colors",
                  option2:
                    "It told how Paul wanted to go back to New York as quick as possible",
                  option3:
                    "It told how Paul couldn't understand the culture of soccer in Argentina",
                  option4:
                    "It told how Paul loathed the culture of soccer in Argentina",
                  answer: "1",
                },
                {
                  quiz: "How do you summarize a story?",
                  option1:
                    "By telling the important events and details in your own words",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "Why do we summarize stories?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "To help us remember what we have read",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "When do we summarize a story?",
                  option1:
                    "We can only summarize the whole story when we finish reading it",
                  option2:
                    "We can summarize the whole story when we finish reading it, or we can summarize parts of the story while reading it",
                  option3:
                    "We can only summarize parts of the story while reading it",
                  option4: "We can summarize the story before reading it",
                  answer: "2",
                },
                {
                  quiz:
                    "In what circumstances were Paul and his family as described on page 167?",
                  option1:
                    "His mom was discussing a vacation plan with him and his dad to go visit his uncle and aunt in Argentina, and Paul was very excited to travel",
                  option2:
                    "His mom was troubled by the vacation plan to go visit his uncle and aunt in Argentina",
                  option3:
                    "His mom was discussing a vacation plan with him to go visit his uncle and aunt in Argentina, but his dad was very reluctant to travel",
                  option4:
                    "His mom was discussing a vacation plan with him and his dad to go visit his uncle and aunt in Argentina, but Paul was very reluctant to travel",
                  answer: "4",
                },
                {
                  quiz:
                    "What were Paul's first night experiences in Buenos Aires like, and what effects did they have on him?",
                  option1:
                    "In the beginning, Paul was in bleak mood, but later started liking the place after realizing some similarities in food culture between his home and Buenos Aires, and coming to learn about the dance and soccer culture in Argentina",
                  option2:
                    "Paul was excited since when they landed in Buenos Aires and that made him like the place",
                  option3:
                    "Paul was excited in the beginning, but later the food in Buenos Aires made him loath the place",
                  option4:
                    "Paul started in bleak mood, and the unacceptable culture in Buenos Aires made him loath the place more",
                  answer: "1",
                },
                {
                  quiz: "What is the theme of a story?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "It is title of a story",
                  option4:
                    "It is the overall idea or message about life that the author wants the reader to know",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a story?",
                  option1: "You can do that by thinking yourself",
                  option2:
                    "You can do that by thinking about what characters say and do, and what happens to them",
                  option3:
                    "You can do that by looking at the last sentence only",
                  option4: "You can do that by looking at the title only",
                  answer: "2",
                },
                {
                  quiz:
                    'What did the characters in "A Reluctant Traveler" say and or do that help conclude to the theme of the story?',
                  option1:
                    "Paul's mom said that they were going to Argentina to visit Paul's uncle and aunt",
                  option2:
                    "Paul's uncle ordered Empanadas for dinner for them on their first night in Argentina",
                  option3:
                    "Paul started saying packing winter clothes in August is weird, but in the end said he might paint his room in soccer team colors after visiting Argentina",
                  option4: "Paul's aunt said she wants to be multilingual",
                  answer: "3",
                },
                {
                  quiz:
                    'What happened to the characters in "A Reluctant Traveler" that help conclude to the theme of the story?',
                  option1: "Paul's family was going to England",
                  option2:
                    "Paul's family was going to Argentina to visit his aunt and uncle and there in Buenos Aires, his aunt and uncle took them to visit the place and learn about the food, dance, and soccer culture over there.",
                  option3: "Paul's family was going to France for vacation",
                  option4:
                    "Paul's family was going to Beijing to visit his aunt and uncle",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "Judge a book by its cover",
                  option2: "Do not judge a book by its cover",
                  option3: "Never read a book",
                  option4: "Do not open your book",
                  answer: "2",
                },
              ],
            },
            {
              name: "June 17, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Being Resourceful ",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "How can learning about nature be useful?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "18",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how 4 friends use their knowledge of nature to survive",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "1",
                },
                {
                  quiz:
                    "How many friends were actually helpful, and who were they?",
                  option1: "3: Latrice, Raul, and Juanita",
                  option2: "2: Raul and Juanita",
                  option3: "1: Juanita",
                  option4: "All of them",
                  answer: "1",
                },
                {
                  quiz: "What strategy do you use to better understand a text?",
                  option1: "Summarize",
                  option2: "Looking",
                  option3: "Skimming",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "How do you summarize a text?",
                  option1: "By reading well",
                  option2: "By looking fast",
                  option3:
                    "By deciding the most important details and retelling them in our own words",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you tell which details are most important?",
                  option1: "By guessing",
                  option2:
                    "By asking ourself if those details are helping us understand what is happening or not",
                  option3: "By looking at the longest ones",
                  option4: "By looking at the shortest ones",
                  answer: "2",
                },
                {
                  quiz:
                    "How does the theme of a story help us better understand a text?",
                  option1: "It says how good something is",
                  option2: "It tells what we should be thinking",
                  option3:
                    "It shares the message about life the author wants us to know after reading the story",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you find the theme of a story?",
                  option1: "By looking at homographs in the story",
                  option2: "By reading many times",
                  option3: "by looking at latin roots",
                  option4:
                    "By looking into what the characters say, do, and what happens to them",
                  answer: "3",
                },
              ],
            },
            {
              name: "June 24, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What vowel sound does the first vowel become in double vowel syllables?",
                  option1: "Short and Long vowel sound",
                  option2: "Short vowel sound",
                  option3: "Long vowel sound",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What is shifting tenses?",
                  option1:
                    "Same tense in verbs in a simple sentence or paragraph",
                  option2:
                    "Tense change in verbs in a simple sentence or paragraph",
                  option3:
                    "No tense change in verbs in a simple sentence or paragraph",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "How do we avoid shifting tenses?",
                  option1:
                    "By making sure verbs in a sentence or paragraph have different tenses",
                  option2:
                    "By making sure verbs in a sentence or paragraph are in different tenses",
                  option3:
                    "By making sure verbs in a sentence or paragraph are in the same tense",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "Which is one feature of an opinion essay?",
                  option1: "Use foreshadowing",
                  option2: "Use dialogue",
                  option3: "Use figurative language",
                  option4: "Use connotation and denotation",
                  answer: "4",
                },
                {
                  quiz: "Which is one feature of an opinion essay?",
                  option1: "Use foreshadowing",
                  option2: "Use dialogue",
                  option3: "Chose the right words",
                  option4: "Use figurative language",
                  answer: "3",
                },
                {
                  quiz: "Which is one feature of an opinion essay?",
                  option1: "Use foreshadowing",
                  option2: "Use dialogue",
                  option3: "Use supporting details from text evidence",
                  option4: "Use figurative language",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By writing the question",
                  option2: "By saying your opinion",
                  option3: "By writing text evidence",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you write the body of an opinion essay?",
                  option1:
                    "By using facts from text evidence as supporting details",
                  option2: "By restating your opinion",
                  option3: "By rewriting the question",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How do you write the conclusion of an opinion essay?",
                  option1:
                    "By using facts from text evidence as supporting details",
                  option2: "By rewriting the question",
                  option3:
                    "By restating your opinion with some more precise words",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you make your essay fluent?",
                  option1: "By using a lot of prepositions",
                  option2: "By using a lot of words",
                  option3: "By doing nothing",
                  option4: "By using transition words like however",
                  answer: "4",
                },
              ],
            },
            {
              name: "July 1, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Patterns of Change",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can learning about different cultures teach us?",
                  option4: "Where can we find patterns in nature?",
                  answer: "4",
                },
                {
                  quiz: "What are the two kinds of Igneous Rocks we learned?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "Granite and Obsidian",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What patterns can we find in Igneous Rocks?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "Tessellations",
                  answer: "4",
                },
                {
                  quiz:
                    "What are the three kinds of Sedimentary Rocks we learned?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2: "Sandstone, Limestone, and Strata",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What patterns can we find in Sedimentary Rocks?",
                  option1: "Repetition of lines and layers",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is the first stage of The Rock Cycle?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "Sediment",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "Squeezing and cementing of sediment forms ...",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Sedimentary Rock",
                  answer: "4",
                },
              ],
            },
            {
              name: "July 8, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What patterns are found in sedimentary rocks?",
                  option1: "Limestone, Marble, and Sandstone",
                  option2: "Granite and Obsidian",
                  option3: "Blackstone, Whitestone and Cactus",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Where can we see the patterns found in sedimentary rocks?",
                  option1: "In the sky",
                  option2: "In deserts or sea and beaches or riverbanks",
                  option3: "In the house",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do rocks change?",
                  option1: "They move from one place to another",
                  option2: "They get transported by people",
                  option3:
                    "Water, wind, and temperature over long periods of time erode and change them, and even shape and sketch designs on them",
                  option4: "They turn into plants and other living things",
                  answer: "3",
                },
                {
                  quiz: "How are Igneous rocks formed?",
                  option1:
                    "They are formed after the wind blows trees down and those trees decay and accumulate to form Igneous rock.",
                  option2:
                    "They are formed after hard rocks get crushed by people as they walk on it and eventually split into Igneous rock.",
                  option3:
                    "They are formed after hot gas far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually turns into crystals of Igneous rock.",
                  option4:
                    "They are formed after hot liquid rock called magma or lava far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually slowly cools to form crystals of Igneous rock.",
                  answer: "4",
                },
                {
                  quiz:
                    'What was the main idea of the section "Sedimentary Rocks" on page 196 of Reading Writing Workshop?',
                  option1: "Sedimentary rocks could be used as soccer balls",
                  option2: "Air will get compressed into sedimentary rocks",
                  option3:
                    "Particles such as sand or bones and shells form different sedimentary rocks",
                  option4: "Sedimentary rocks are extremely hard",
                  answer: "3",
                },
                {
                  quiz:
                    'What was the main idea of the section "Rock Formations" on page 196 of Reading Writing Workshop?',
                  option1: "Rock formations are so beautiful",
                  option2:
                    "Layers of sedimentary rock create different rock formations",
                  option3: "Rock formations are very rare and scarce",
                  option4:
                    "Soil particles accumulate in the air to create rock formations",
                  answer: "2",
                },
                {
                  quiz:
                    'How did you know the selection "Patterns of Change" was an expository text?',
                  option1:
                    "It provided evidence and gave reasons why patterns occur, supported them with facts and concrete details, and included diagrams that illustrated information",
                  option2:
                    "It had imaginary characters that couldn't exist in real life",
                  option3:
                    "The setting was all made-up and the events were too unrealistic",
                  option4: "It had hero with a set of tasks to accomplish",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "geo"?',
                  option1: "Earth",
                  option2: "Sun",
                  option3: "Moon",
                  option4: "Water",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "logy"?',
                  option1: "Eat",
                  option2: "Life",
                  option3: "Play",
                  option4: "Study",
                  answer: "4",
                },
                {
                  quiz: 'What is the meaning of the greek root "chrono"?',
                  option1: "Pet",
                  option2: "History",
                  option3: "Time",
                  option4: "Fast",
                  answer: "3",
                },
              ],
            },
            {
              name: "July 15, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 22, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "5",
                  option4: "8",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "1",
                },
                {
                  quiz:
                    "What did the historians find by studying the ancient quipu?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "Some said it was a calculator and others said it was a language",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "3",
                },
                {
                  quiz: "When do you summarize a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "As you read and or in the end",
                  option3: "Only as you read",
                  option4: "Only in the end",
                  answer: "2",
                },
                {
                  quiz: "What was each author's point of view?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "4",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Same sentence context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "r-controlled vowel syllables",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "Irregular verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How are irregular verbs special?",
                  option1: "They are not",
                  option2: "They link the subject and a word in the predicate",
                  option3: "They help the main verb",
                  option4:
                    "They do not end in -ed to form the past tense and have special spellings when used with have in the perfect or progressive tenses",
                  answer: "4",
                },
                {
                  quiz:
                    "How do you spell the irregular verb ride when used with have?",
                  option1: "Have ride",
                  option2: "Have rode",
                  option3: "Have ridden",
                  option4: "Have rid",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you spell the irregular verb take when used with have?",
                  option1: "Have taken",
                  option2: "Have take",
                  option3: "Have took",
                  option4: "Have taked",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you spell the irregular verb be when used with have?",
                  option1: "Have be",
                  option2: "Have been",
                  option3: "Have is",
                  option4: "Have was",
                  answer: "2",
                },
                {
                  quiz:
                    "How do you spell the irregular verb begin when used with have?",
                  option1: "Have begin",
                  option2: "Have began",
                  option3: "Have begun",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you spell the irregular verb come when used with have?",
                  option1: "Have come",
                  option2: "Have came",
                  option3: "Have camed",
                  option4: "Have comed",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you spell the irregular verb do when used with have?",
                  option1: "Have do",
                  option2: "Have did",
                  option3: "Have done",
                  option4: "Have doed",
                  answer: "3",
                },
                {
                  quiz: "How do you write a good informative essay?",
                  option1:
                    "Use precise language, use transitions, and include reasons and evidence",
                  option2: "Write many conclusions",
                  option3: "Write many meaningless details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 29, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was Unit 4 about?",
                  option1: "How do we explore plants?",
                  option2: "How do we go to school?",
                  option3: "How do we decide what is important?",
                  option4: "How do we ride a bike?",
                  answer: "3",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Praying",
                  option2: "Sharing Stories",
                  option3: "Dancing",
                  option4: "Learning to cook",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "What can we do to improve our reading",
                  option2: "What are the kinds of tales?",
                  option3:
                    "What kinds of stories do we tell and why do we tell them?",
                  option4: "What can we bring to a picnic",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn?",
                  option1: "8",
                  option2: "10",
                  option3: "12",
                  option4: "14",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story we read last class?",
                  option1: "Types of Rocks",
                  option2: "Plants and Nature",
                  option3: "How Mighty Kate Stopped the Train",
                  option4: "A devised plan",
                  answer: "3",
                },
                {
                  quiz: "What was the story about?",
                  option1: "About a girl collecting plants",
                  option2: "About four friends playing a game",
                  option3: "About a heroic young girl who saves the day",
                  option4: "About types of rocks",
                  answer: "3",
                },
                {
                  quiz: "How did the author tell the story?",
                  option1: "In a dull way",
                  option2: "In a fantastic way",
                  option3: "In an angry way",
                  option4: "In a rushed way",
                  answer: "2",
                },
                {
                  quiz: "Why did the author tell the story that way?",
                  option1: "To tell the reader what to do",
                  option2: "To catch the reader's attention",
                  option3: "To drive away the reader",
                  option4: "To make the story sound scary",
                  answer: "2",
                },
                {
                  quiz: "How did you know the story was a Tall Tale?",
                  option1: "It had a larger-than-life character, Kate",
                  option2:
                    "It described events that couldn't happen in real life such as the author said Kate's whistle traveled kilometers",
                  option3:
                    "It had humorous exaggeration and hyperbole where Kate yanked up workers in distress with one hand",
                  option4: "All of the above",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 5, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4: "How to pronounce diphthongs",
                  answer: "3",
                },
                {
                  quiz: "What are pronouns?",
                  option1: "They are common nouns",
                  option2: "They are words that replace nouns",
                  option3: "They are nouns",
                  option4: "They are verbs",
                  answer: "2",
                },
                {
                  quiz: "What are antecedents?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are words that pronouns replace",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are indefinite pronouns?",
                  option1:
                    "They are pronouns that are in the middle of the sentence",
                  option2:
                    "They are pronouns that are in the end of the sentence",
                  option3:
                    "They are pronouns that are in the beginning of the sentence",
                  option4:
                    "They are pronouns that refer to something or someone not specific",
                  answer: "4",
                },
                {
                  quiz: "What is pronoun-antecedent agreement?",
                  option1: "They must match in gender only",
                  option2: "They must match in number only",
                  option3: "They must match in number and gender",
                  option4: "They must match in agreement",
                  answer: "3",
                },
                {
                  quiz:
                    "What kind of text did we practice to write last class?",
                  option1: "Poem",
                  option2: "Opinion essay",
                  option3: "Narrative text",
                  option4: "Informative text",
                  answer: "3",
                },
                {
                  quiz: "Which is a way to make a narrative text fun?",
                  option1: "Use formal voice",
                  option2: "Use informal voice",
                  option3: "Use transition words",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you describe scenes precisely?",
                  option1: "By using many words",
                  option2: "By using sensory details",
                  option3: "By using verbs",
                  option4: "By using nouns",
                  answer: "2",
                },
                {
                  quiz: "How do you reinforce ideas in a narrative text?",
                  option1: "By changing the style and tone",
                  option2: "By using more words",
                  option3: "By using sensory details",
                  option4: "By using figurative language",
                  answer: "4",
                },
                {
                  quiz: "What narrative text did we write last class?",
                  option1: "Where Kate whistled",
                  option2: "Where Kate tossed a boulder",
                  option3: "Where Kate wrung the wet log",
                  option4: "Where babe Kate picked up her doc",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 12, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Drama",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "Where's Brownie?",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About kids who piece together clues to find a missing pet",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "2",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can you discover when you give things a second look?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How do Alex's and Evan's observations help them find Brownie?",
                  option1:
                    "They learn that chameleons change color with their environments, so look for possible different-color Brownie",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you do to better understand a play?",
                  option1:
                    "By visualizing the scene descriptions, characters, settings, and actions",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "In a play, who do you call a speaker?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "A character who delivers a particular line of dialogue from his or her own point of view",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "In a play, who do you call a narrator?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "One who provides information from a point outside the main action of the play",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What features make a mystery play?",
                  option1:
                    "Center on a mystery that must be solved using clues, is made up mostly of dialogue among the characters, and contain scenes, setting details, and stage directions ",
                  option2:
                    "The four friends went to Survivaland, they had fun, and they got out",
                  option3:
                    "The four friends went to Survivaland, they had fun, and they didn't make it back",
                  option4:
                    "The four friends went into the game, they had fun, and they got out",
                  answer: "1",
                },
                {
                  quiz: "What are adages and proverbs?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "They are sayings that are often repeated",
                  option4:
                    "It is the message about life that the author thinks is important",
                  answer: "3",
                },
                {
                  quiz: "What did we learn about prefixes last class?",
                  option1: "How they change the stress in words",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "Why did we learn how they change the stress in words?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "To increase our reading fluency",
                  answer: "4",
                },
                {
                  quiz: "How many pronouns did we learn about last class",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What were they?",
                  option1: "Goalie, Dancing, Eating, and Running pronouns",
                  option2: "Happy, Sad, Angry, and Sleepy pronouns",
                  option3: "Subject, Object, Reflexive, and Relative pronouns",
                  option4: "Cars, Bikes, School, and Book pronouns",
                  answer: "3",
                },
                {
                  quiz:
                    "What is the main difference between a subject pronoun and an object pronoun?",
                  option1:
                    "A subject pronoun comes before the verb, but an object pronoun comes after the verb",
                  option2:
                    "A subject pronoun comes after the verb, but an object pronoun comes before the verb",
                  option3:
                    "A subject pronoun is placed in the middle of the sentence, but an object pronoun is placed in the beginning of the sentence",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a reflexive pronoun?",
                  option1:
                    "It is one that tells what one does for or to oneself",
                  option2: "It is one that tells what oneself is doing",
                  option3: "It is one that tells what oneself is not doing",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a relative pronoun?",
                  option1:
                    "It is one that replaces the antecedent and tells more about that antecedent",
                  option2: "It is one that replaces the antecedent only",
                  option3:
                    "It is one that tells more about the antecedent only",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "How do we use commas with quotes in a dialogue?",
                  option1:
                    "We put commas outside the opening quotation marks but inside the closing quotation marks",
                  option2:
                    "We put commas inside the opening quotation marks but outside the closing quotation marks",
                  option3:
                    "We put commas outside the opening quotation marks and outside the closing quotation marks",
                  option4:
                    "We put commas inside the opening quotation marks and inside the closing quotation marks",
                  answer: "1",
                },
                {
                  quiz: "How do we use quotation marks in a dialogue?",
                  option1:
                    "We use them before and after the exact words that a speaker says or writes",
                  option2:
                    "We use them only before the exact words that a speaker says or writes",
                  option3:
                    "We use them only after the exact words that a speaker says or writes",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What is the first thing to write when writing a scene?",
                  option1: "The dialogue",
                  option2: "The setting",
                  option3: "The scene number",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "August 19, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Take Action",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3:
                    "What can people do to bring about a positive change?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "20",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About what Frederick Douglass did to bring about a positive change for African Americans",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "2",
                },
                {
                  quiz:
                    "What did Frederick Douglass do to bring about a positive change for African Americans?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "Some said it was a calculator and others said it was a language",
                  option4:
                    "Spoke against slavery, exposed the horrors of slavery, wrote a book, started his own abolitionist newspaper, and worked tirelessly to end segregation.",
                  answer: "4",
                },
                {
                  quiz: "What should summaries say?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "As you read and or in the end",
                  option3: "Only what is in the text",
                  option4: "Only in the end",
                  answer: "3",
                },
                {
                  quiz: "How do you find the author's point of view?",
                  option1:
                    "By finding the key details of each section of the text and summarizing what do they have in common",
                  option2: "To be happy",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "1",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It told facts about the life of Fredrick Douglass, described its talents and achievements, and was written in logical order",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between a prefix and a suffix?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3:
                    "A prefix is a word part added to the beginning of another word to change its meaning, meanwhile a suffix is added to the end",
                  option4: "Paragraph clues",
                  answer: "3",
                },
              ],
            },
            {
              name: "August 26, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What did we learn about homographs last class?",
                  option1: "They are spelled the same",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What else did we learn about homographs last class?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "May sound the same or not",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the last thing we learned about homographs last class?",
                  option1: "Differ in meaning",
                  option2: "Must be different words",
                  option3: "Have the same meaning",
                  option4: "Always sound the same",
                  answer: "1",
                },
                {
                  quiz: "How do pronouns and verbs agree?",
                  option1: "They never agree in any ways",
                  option2: "They don't need to agree",
                  option3: "They agree in number and gender",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you form pronoun-verb contractions?",
                  option1:
                    "By putting a pronoun and verb together and using an apostrophe to replace the omitted letters",
                  option2:
                    "By putting a pronoun and verb together and leaving no letter out",
                  option3: "By replacing a pronoun with a verb together",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "Can you abbreviate state names on envelopes?",
                  option1: "Yes",
                  option2: "No",
                  option3: "Never",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods on abbreviations that are read like words?",
                  option1: "No",
                  option2: "Yes",
                  option3: "Always",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods with abbreviations of measure units in the metric system?",
                  option1: "No",
                  option2: "Sometimes",
                  option3: "Yes",
                  option4: "Always",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you double the period at the end of a sentence ending with an abbreviation?",
                  option1: "No",
                  option2: "Always",
                  option3: "Sometimes",
                  option4: "Yes",
                  answer: "1",
                },
                {
                  quiz: "How do you write a good informative text?",
                  option1: "Use repetition, rhyme, and stanzas",
                  option2:
                    "Use figurative language, informal voice, and dialogue",
                  option3:
                    "Develop the topic, use logical order text structure, and finish with a strong conclusion",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 2, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Consider Our Resources",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3: "Why are natural resources valuable?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "14",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4: "About the ways natural resources provide energy?",
                  answer: "1",
                },
                {
                  quiz: "How are natural resources valuable?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "The sun helps heat our planet, coal is burned to heat our homes, and oil is transformed into gasoline to power our cars",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "3",
                },
                {
                  quiz:
                    "What ways did the text suggest that individuals can save energy?",
                  option1:
                    "By asking and answering questions about those details",
                  option2:
                    "Turning off lights, TVs, computers, and other devices when they are not using them",
                  option3: "Only as you read",
                  option4: "Only in the end",
                  answer: "2",
                },
                {
                  quiz:
                    "What are some of the things you said you could do personally to save energy?",
                  option1: "To help us read well",
                  option2: "Use less appliances",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It explained why natural resources are valuable, presented information in logical order, and presented them in a chart",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2:
                    "Surrounding definition and restatement context clues",
                  option3: "Same sentence context clues",
                  option4: "Paragraph clues",
                  answer: "2",
                },
              ],
            },
            {
              name: "September 16, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What sound did we learn to read last class?",
                  option1: "Open syllable",
                  option2: "r-controlled vowel syllables",
                  option3: "Closed syllable",
                  option4:
                    "The sound of the letters ture, cher, tcher, and zure",
                  answer: "4",
                },
                {
                  quiz: "What kind of pronouns did we learn last class?",
                  option1: "Irregular verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "Possessive pronouns and reflexive pronouns",
                  answer: "4",
                },
                {
                  quiz: "What did we say about apostrophes?",
                  option1:
                    "They are used in dialogues, making the possessive, and contractions",
                  option2: "They link the subject and a word in the predicate",
                  option3: "They help the main verb",
                  option4:
                    "They do not end in -ed to form the past tense and have special spellings when used with have in the perfect or progressive tenses",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about summarizing a text?",
                  option1: "Have ride",
                  option2:
                    "We said we use the most important ideas from the text and do not include our own opinions",
                  option3: "Have ridden",
                  option4: "Have rid",
                  answer: "2",
                },
                {
                  quiz:
                    "What did we learn about how to find the author's point of view?",
                  option1: "Pay attention to the words that the author chose",
                  option2: "Have take",
                  option3: "Have took",
                  option4: "Have taked",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about writing an opinion essay?",
                  option1: "Have be",
                  option2:
                    "It should start with a strong opening, provide reasons and evidence, and use transitions",
                  option3: "Have is",
                  option4: "Have was",
                  answer: "2",
                },
                {
                  quiz: "Which of the following are reflexive pronouns?",
                  option1: "Him, her, and them",
                  option2: "He, she, and it",
                  option3: "Myself, hisself, and yourself",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come before the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "Hers and his",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come after the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "We and they",
                  answer: "3",
                },
                {
                  quiz: "What is the use of a chart?",
                  option1:
                    "Use precise language, use transitions, and include reasons and evidence",
                  option2: "Write many conclusions",
                  option3:
                    "It represents facts visually to allow readers to compare and contrast information",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 23, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Making It Happen",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3: "How do you prepare for a picnic?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "4",
                },
                {
                  quiz: "What is a lyric poetry?",
                  option1: "It is a poem that contains rhyme and alliteration",
                  option2: "It is a short poem",
                  option3: "It is a poem that tells a story",
                  option4: "It is a long poem",
                  answer: "1",
                },
                {
                  quiz: "What is a free verse?",
                  option1: "It is a poem that tells a story",
                  option2: "It is a long poem",
                  option3: "It is a short poem",
                  option4:
                    "It is a poem that has no rhyming pattern, meter or line length",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a poem?",
                  option1:
                    "It is the repeated use of words, sounds or phrases for effect or emphasis",
                  option2: "It is the repeated use of punctuations",
                  option3: "By identifying poetic elements and key details",
                  option4: "It is the repeated use of the same title",
                  answer: "3",
                },
                {
                  quiz: "What is rhyme in poetry?",
                  option1: "It is the repetition of the same consonant sound",
                  option2: "It is the repetition of the same vowel sound",
                  option3: "It is the repetition of the same word",
                  option4: "It is the repetition of the same letter",
                  answer: "2",
                },
                {
                  quiz: "What is alliteration?",
                  option1:
                    "They're words that are spelled the same and have the same meaning",
                  option2:
                    "It is the presence of the same consonant sound in the beginning of two or more words",
                  option3:
                    "They're words that are spelled the same but have different meanings and may or may not have the same pronunciation",
                  option4:
                    "They're words that are not spelled the same but have the same meaning",
                  answer: "2",
                },
                {
                  quiz: "What is meter in poetry?",
                  option1:
                    "It is the rhythm or regular pattern of sounds in a line",
                  option2: "It's the same as its denotation",
                  option3: "Guess it from its letters",
                  option4: "Use context clues to figure out the meaning",
                  answer: "1",
                },
                {
                  quiz: "What is stanza in poetry?",
                  option1: "Foreshadowing and Imagery",
                  option2: "Effect and Emphasis",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between simile and metaphor?",
                  option1: "In unity there's strength",
                  option2: "It takes two to tango",
                  option3: "Hope is the source of life",
                  option4:
                    "Simile uses words like or as to make a comparison, but metaphor makes a comparison without them",
                  answer: "4",
                },
              ],
            },
            {
              name: "September 30, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "3",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "16",
                  answer: "1",
                },
                {
                  quiz: "How is making predictions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us read with purpose",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast characters.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is realistic fiction?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it features events and settings typical of the time period in which the story is set",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is an idiom?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is an expression that cannot be defined by the words in it",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3:
                    "They are words that sound the same, but are spelled differently and have different meaning",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What is a dependent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an independent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "October 14, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "4",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "3",
                },
                {
                  quiz: "How did Miguel change after entering Middle School?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What caused him to change?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "He became friend with Jake",
                  answer: "4",
                },
                {
                  quiz:
                    "How can making predictions help us better understand the text?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What can you compare and contrast in a story?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is Realistic Fiction?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3:
                    "It is where characters and settings may actually exist in real life",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "What context clues did we talk about in the class?",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Comparisons",
                  answer: "4",
                },
              ],
            },
            {
              name: "October 21, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce the suffixes less, ist, ion, and ful, and how to use their meaning to infer unfamiliar words based of them",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix less?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the suffix ist?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means person who studies",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the suffix ion?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means the act of",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix ful?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means full of",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What did we learn under grammar last class?",
                  option1: "Adjectives",
                  option2: "Present tense verbs",
                  option3: "Pronouns",
                  option4:
                    "Independent and dependent clauses, and appositives and commas",
                  answer: "4",
                },
                {
                  quiz:
                    "What is the difference between an independent clause and a dependent clause?",
                  option1:
                    "The former has many words but the latter has few words",
                  option2:
                    "The former can stand on its own meanwhile the latter cannot",
                  option3: "The former is a clause but the other is not",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "What is the relationship between appositives and commas?",
                  option1:
                    "Commas appear before and immediately after appositives",
                  option2: "Commas only appear before appositives",
                  option3: "Commas only appear after appositives",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing opening linking word?",
                  option1: "As you can see",
                  option2: "Lastly",
                  option3: "First",
                  option4: "I believe",
                  answer: "4",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing closing linking word?",
                  option1: "As you can see",
                  option2: "Third",
                  option3: "Also",
                  option4: "The next",
                  answer: "1",
                },
              ],
            },
            {
              name: "October 28, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "3",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "16",
                  answer: "1",
                },
                {
                  quiz: "How is making predictions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us read with purpose",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast characters.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is realistic fiction?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it features events and settings typical of the time period in which the story is set",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is an idiom?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is an expression that cannot be defined by the words in it",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "assume"?',
                  option1: "To dance",
                  option2: "To play",
                  option3: "To infer or conclude",
                  option4: "To race",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "rely"?',
                  option1: "To play with something",
                  option2: "To depend on something",
                  option3: "To eat something",
                  option4: "To write something",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "nominate"?',
                  option1: "To appoint to a position",
                  option2: "To demote",
                  option3: "To promote",
                  option4: "To layoff",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 4, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3:
                    "They are words that sound the same, but are spelled differently and have different meaning",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What is a dependent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an independent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: 'What was the meaning of the word "guarantee"?',
                  option1: "To say ok",
                  option2: "To refuse",
                  option3: "To give a promise",
                  option4: "To run away",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "obviously"?',
                  option1: "To be afraid",
                  option2: "To be overt or easily seen",
                  option3: "To give",
                  option4: "To take",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "supportive"?',
                  option1: "To give support",
                  option2: "To take away",
                  option3: "To play around",
                  option4: "To race with",
                  answer: "1",
                },
                {
                  quiz: 'What was the meaning of the word "sympathy"?',
                  option1: "To denigrate",
                  option2: "To loath",
                  option3: "To hate",
                  option4: "To show compassion",
                  answer: "4",
                },
                {
                  quiz: 'What was the meaning of the word "assume"?',
                  option1: "To dance",
                  option2: "To play",
                  option3: "To infer or conclude",
                  option4: "To race",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "rely"?',
                  option1: "To play with something",
                  option2: "To depend on something",
                  option3: "To eat something",
                  option4: "To write something",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "nominate"?',
                  option1: "To appoint to a position",
                  option2: "To demote",
                  option3: "To promote",
                  option4: "To layoff",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 11, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Our Changing Earth",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "What changes in the environment affect living things?",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "4",
                },
                {
                  quiz:
                    "How is asking and answering questions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast ideas.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is expository text?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is a graph?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are photographs?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are captions?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "They are words that add information to a photograph",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: 'What is the meaning of the prefix "dis"?',
                  option1: "It means not or absence of or opposite of",
                  option2: "It means before",
                  option3: "It means wrong",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 18, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "CHANGING VIEWS OF EARTH",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About how our understanding of Earth has changed along with scientific developments over time",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "How can scientific knowledge change over time?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz:
                    "What was the effect of flight on our knowledge about Earth?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4:
                    "Permitted to launch satellites in space to achieve new breakthroughs",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Helps stay focused",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you call cause and effect events where the effect of the previous event is the cause of the current one?",
                  option1: "Cause-Effect Chain",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "1",
                },
                {
                  quiz: "What is a diagram?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3:
                    "It’s a drawing that shows the different parts of something and how they relate to each other",
                  option4: "Repetition of shoes and cars",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "geo"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Earth",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "helio"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Sun",
                  option4: "Igneous Rock",
                  answer: "3",
                },
              ],
            },
            {
              name: "November 25, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Scientific Viewpoints",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "What benefits come from people working as a group?",
                  option4:
                    "How do natural events and human activities affect the environment?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "11",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About two different views on the arrival of new species into the U.S.",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "What where the uses of species introduced in the U.S.?",
                  option1:
                    "Some like horses were used for work, transportation, and recreation",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz:
                    "What where the harmful effects of species introduced in the U.S.?",
                  option1:
                    "Some like the Med. Fruit Fly destroyed native plants like citrus.",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What did we say about how you make sure to understand a persuasive article last class?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "By asking and answering questions",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What skill did we learn that you can use to understand a persuasive article last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Author's Point of View",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to persuade me to agree with the author's viewpoint with some evidence and a chart",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Biography",
                  option3: "Persuasive Article ",
                  option4: "Expository Text",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 2, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What root word did we learn last class?",
                  option1: "div",
                  option2: "ope",
                  option3: "nat",
                  option4: "nativus",
                  answer: "4",
                },
                {
                  quiz: "What other root word did we learn last class?",
                  option1: "cal",
                  option2: "spec",
                  option3: "elon",
                  option4: "circ",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the root avis?",
                  option1: "It means us",
                  option2: "It means fruit",
                  option3: "It means bird",
                  option4: "It means snake",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the root nativus?",
                  option1: "It means cheer up",
                  option2: "It means walking up",
                  option3: "It means happy",
                  option4: "It means to be born",
                  answer: "4",
                },
                {
                  quiz: "What grammar did we learn?",
                  option1: "Prepositions",
                  option2: "locatives",
                  option3: "Irregular Comparative and Superlative",
                  option4: "SVP",
                  answer: "3",
                },
                {
                  quiz: "What were the 2 sounds of suffix -ion?",
                  option1: "up and down",
                  option2: "ee and e",
                  option3: "o and a",
                  option4: "shuhn and zhuhn",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the word nonnative?",
                  option1: "Born in the country of residence",
                  option2: "Not born in the country of residence",
                  option3: "Born in February",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the word species?",
                  option1: "A group of animals with the same habits",
                  option2: "A group of animals not having the same habits",
                  option3: "A group of animals with some similar habits",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What is the meaning of the word avian?",
                  option1: "Fruit",
                  option2: "Food",
                  option3: "Transportation",
                  option4: "Bird",
                  answer: "4",
                },
                {
                  quiz: "What is the prefix -ion used for?",
                  option1: "To make the noun of a verb",
                  option2: "To make the adjective of a verb",
                  option3: "To make the predicate of a verb",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 9, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What unit did we introduce last class?",
                  option1: "Unit 2",
                  option2: "Unit 3",
                  option3: "Unit 5",
                  option4: "Unit 6",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the big idea of the unit we introduced last class?",
                  option1: "How to learn and study",
                  option2: "How to be a good friend",
                  option3: "How do we help each other",
                  option4: "How are we all connected",
                  answer: "4",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Joining forces",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4: "How do different groups contribute to a cause?",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read about last class?",
                  option1:
                    "How a young girl learns how to contribute to for her community",
                  option2:
                    "How a young girl learns how to contribute to the war effort during the first World War",
                  option3:
                    "How a young girl learns how to contribute during the great recession",
                  option4:
                    "How a young girl learns how to contribute to the war effort during World War II",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "drills"?',
                  option1: "Sleeping",
                  option2: "Practice",
                  option3: "Playing",
                  option4: "Eating",
                  answer: "2",
                },
                {
                  quiz: 'What was the meaning of the word "enlisted"?',
                  option1: "Play",
                  option2: "Register",
                  option3: "Drive a car",
                  option4: "Play with a toy",
                  answer: "2",
                },
                {
                  quiz: "How is summarizing while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you find the theme of stories like the one we read last class?",
                  option1: "By comparing and contrasting phonics",
                  option2: "By comparing and contrasting grammar",
                  option3:
                    "By paying attention to what the characters do and say and what happens to them.",
                  option4: "By comparing and contrasting letters",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 16, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "How will you know a text is historical fiction?",
                  option1:
                    "If it features events and settings typical of the period in which the story is set.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "1",
                },
                {
                  quiz: "What is a Flashback?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3:
                    "It is a description of events and actions that occurred before the main action of the story",
                  option4: "It is an expression that has no meaning",
                  answer: "3",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4:
                    "They are words that sound the same but are spelled differently and have different meanings",
                  answer: "4",
                },
                {
                  quiz: "What part of speech are words with the -ion suffix?",
                  option1: "Verbs",
                  option2: "Nouns",
                  option3: "Adjectives",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an Adverb?",
                  option1: "It is a word that tells more about the verb",
                  option2: "It is an adjective",
                  option3: "It is a different verb",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What were the 3 features we learned a good narrative text should have last class?",
                  option1:
                    "Sequence, Develop Character and Figurative Language",
                  option2:
                    "Cause-Effect Chain, Author's point of view and Main Idea",
                  option3: "Similarities, Differences and Definitions",
                  option4: "Drama, Expository and Informational",
                  answer: "1",
                },
                {
                  quiz: "What was the text we wrote last class about?",
                  option1:
                    "About Libby's reaction to her father's comment on her poem in a letter addressed to her",
                  option2:
                    "About Libby's reaction to her brother's comment on her poem in a letter addressed to her",
                  option3:
                    "About Libby's reaction to her sister's comment on her poem in a letter addressed to her",
                  option4:
                    "About Libby's reaction to her friend's comment on her poem in a letter addressed to her",
                  answer: "1",
                },
                {
                  quiz: "What text structure did we use in writing our answer?",
                  option1: "Sequence",
                  option2: "Cause-Effect",
                  option3: "Theme",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What did we do to make the text interesting?",
                  option1: "We developed the character",
                  option2: "We played around",
                  option3: "We wrote about apples",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What else did we add to spice up our text?",
                  option1: "Figurative Language",
                  option2: "Present Continuous",
                  option3: "Simple Present",
                  option4: "Simple Past",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 23, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What was the weekly concept of the new lesson last class?",
                  option1: "Getting Along",
                  option2: "Praying Together",
                  option3: "Helping Each Other",
                  option4: "Eating Together",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the essential question of the new lesson last class?",
                  option1: "What actions can we take to get along with others?",
                  option2: "What actions can we take to pray together?",
                  option3: "What actions can we take to help each other?",
                  option4: "What actions can we take to eat together?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "16",
                  option2: "14",
                  option3: "12",
                  option4: "8",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "The Bully",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3: "About how one student tries to deal with a bully",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "How did Ramon's advice affected Michael's problem with J.T.?",
                  option1: "It helped him kick J.T.",
                  option2:
                    "It helped him solve his feud with J.T. and they eventually became friends",
                  option3: "It helped him punch J.T.",
                  option4: "It helped him yell at J.T.",
                  answer: "2",
                },
                {
                  quiz:
                    "What advice would you give to someone being bullied and why?",
                  option1:
                    "Tell that person to report to his or her parents for protection",
                  option2: "Ask that person to cry out for relief",
                  option3: "Ask that person to fight back to gain respect",
                  option4:
                    "Report to the teacher for he or she can counsel both",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn and practice in this class?",
                  option1: "Connotation and Denotation?",
                  option2: "Context Clues",
                  option3: "Homophones",
                  option4: "Antonyms",
                  answer: "1",
                },
                {
                  quiz:
                    "What phonics skill did we learn and practice in this class?",
                  option1: "Words with Latin Roots",
                  option2: "Words with Greek Roots",
                  option3: "Words from Mythology",
                  option4: "Words Spanish",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 30, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "Mysterious Oceans",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2:
                    "How are living things adapted to their environment?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "What was a way sea creatures adapt to the deep ocean?",
                  option1: "By singing",
                  option2: "Through playing",
                  option3: "By sleeping",
                  option4: "Actively forage for food",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Help check our understanding of complex ideas",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you figure out cause and effect relationships in a text?",
                  option1: 'By looking for cues such as "because of" ',
                  option2: "By closing the book",
                  option3: "By rewriting the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a map?",
                  option1: "It's a photo",
                  option2: "it's a picture",
                  option3: "It’s the flat picture of an area",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "dormant"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Running",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "agile"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Move quickly and easily",
                  answer: "4",
                },
              ],
            },
            {
              name: "January 6, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonics skill did we practice in this class?",
                  option1: "Syllabication",
                  option2: "Inflectional Endings",
                  option3: "Rhymes",
                  option4: "Words from Mythology",
                  answer: "4",
                },
                {
                  quiz: "Where did the meaning of the word Fortune come from?",
                  option1: "From Janus Roman god of beginnings",
                  option2:
                    "From Atlas Greek giant who supported the world on his shoulders",
                  option3: "From Luna Roman goddess of the moon",
                  option4: "From Fortuna Roman goddess of luck",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar skill did we learn and practice in this class?",
                  option1: "Homophones",
                  option2: "Negatives and Negative Contractions",
                  option3: "Antonyms",
                  option4: "Plurals",
                  answer: "2",
                },
                {
                  quiz: "What did we say were Negatives?",
                  option1: "Negatives are words that mean yes",
                  option2: "Negatives are words that mean happy",
                  option3: "Negatives are words that mean run",
                  option4: "Negatives are words that mean no",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar usage did we learn and practice in this class?",
                  option1: "Capitalization in emails",
                  option2: "Capitalization in letters",
                  option3: "How to correct Double Negatives",
                  option4: "How to use plurals",
                  answer: "3",
                },
                {
                  quiz: "What did we say was double negative?",
                  option1: "When there are two negatives in the same clause.",
                  option2: "When there are three negatives in the same clause.",
                  option3: "When there are no negatives in the same clause.",
                  option4: "When there are four negatives in the same clause.",
                  answer: "1",
                },
                {
                  quiz: "What is one way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By changing 1 negative to a positive",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What is another way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By eliminating one of the negative words",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What type of essay did we learn in this class?",
                  option1: "Dialogue",
                  option2: "Informative Text",
                  option3: "Opinon Essay",
                  option4: "Realistic Fiction",
                  answer: "2",
                },
                {
                  quiz:
                    "What were the 3 key points we practiced during the writing?",
                  option1:
                    "Develop a Topic, Use good Sentence Structures, and a Strong Conclusion",
                  option2: "Use Figurative Language only",
                  option3: "pay attention to verbs",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 13, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this class?",
                  option1: "Making a Difference",
                  option2: "Working Hard",
                  option3: "Prayers",
                  option4: "Bravery",
                  answer: "1",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "What impact do our actions have on our world?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "How many vocabulary did we learn in this class?",
                  option1: "12",
                  option2: "11",
                  option3: "10",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "Words to Save the World",
                  option4: "Mysterious Oceans",
                  answer: "3",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how the biologist Rachel Carson used the power of writing to change the world",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "2",
                },
                {
                  quiz:
                    "What impact did the publication of Silent Spring have on the makers of pesticides such as DDT?",
                  option1: "It made them struggle to counter Rachel's claims",
                  option2: "It made them cry",
                  option3: "It made them make more money",
                  option4: "It made them close their companies",
                  answer: "1",
                },
                {
                  quiz: "When to ask and answer questions about a text?",
                  option1: "During reading only",
                  option2: "After reading only",
                  option3: "Before, during, and after reading",
                  option4: "Only before reading",
                  answer: "3",
                },
                {
                  quiz: "Why did Rachel write about pesticide abuse?",
                  option1: "Because their friend reported its harm",
                  option2: "Because their friend said how good they were",
                  option3: "Because their friend didn't like it",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What comprehension skill did we practice in this lesson?",
                  option1: "Problem and solution",
                  option2: "Antonyms",
                  option3: "Synonyms",
                  option4: "Paragraphs",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 20, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What special feature of a biography did we learn and practice in this class?",
                  option1: "Illustrations",
                  option2: "Maps",
                  option3: "Graphs",
                  option4: "Maps",
                  answer: "1",
                },
                {
                  quiz:
                    "What 3 details helped us understand the subject of the biography we read in this lesson?",
                  option1:
                    "The illustration on page 425, that on page 426, and the one on page 427",
                  option2:
                    "The illustration on page 420, that on page 421, and the one on page 422",
                  option3:
                    "The map on page 425, that on page 426, and the one on page 427",
                  option4:
                    "The graph on page 425, that on page 426, and the one on page 427",
                  answer: "1",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words in this class?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
                {
                  quiz: "What are synonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "1",
                },
                {
                  quiz: "What are antonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "2",
                },
                {
                  quiz:
                    "How do antonyms and synonyms help you better understand the meaning of unfamiliar words?",
                  option1:
                    "The relationship between synonyms and antonyms in different texts can help you better understand the meaning of unfamiliar words",
                  option2:
                    "The relationship between synonyms and antonyms in different magazines can help you better understand the meaning of unfamiliar words",
                  option3:
                    "The relationship between synonyms and antonyms in the same sentence or paragraph can help you better understand the meaning of unfamiliar words",
                  option4:
                    "The relationship between synonyms and antonyms in different newspapers can help you better understand the meaning of unfamiliar words",
                  answer: "3",
                },
                {
                  quiz: "What number prefixes did we learn in this class?",
                  option1: "Fr-, Df-, Lo-, Co-",
                  option2: "On-, Tr-, Ez-, Yu-",
                  option3: "Un-, B-, Tr-, Ct-",
                  option4: "Uni-, Bi-, Tri-, Cent-",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Uni-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the number prefix Bi-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Cent-?",
                  option1: "Hundred",
                  option2: "Million",
                  option3: "Ten",
                  option4: "Grams",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 27, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this lesson?",
                  option1: "Out in the World",
                  option2: "Out in the Space",
                  option3: "On a Holiday",
                  option4: "At Home",
                  answer: "1",
                },
                {
                  quiz: "What was the Essential Question of this lesson?",
                  option1: "What can our connections to the world teach us",
                  option2: "How do we contribute to a cause?",
                  option3: "What is best for our environment?",
                  option4: "Can we live without the sun?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn in this lesson?",
                  option1: "10",
                  option2: "9",
                  option3: "8",
                  option4: "7",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text of this lesson?",
                  option1: "Poetry",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What types of poems did we discuss in this lesson?",
                  option1: "Active and Passive",
                  option2: "Figurative and Dormant",
                  option3: "Plain and Story",
                  option4: "Lyric and Narrative",
                  answer: "4",
                },
                {
                  quiz:
                    "How do we find the point of view of the speaker in a poem?",
                  option1: "By closing the book",
                  option2: "By summarizing the text",
                  option3:
                    "By paying attention to the speaker's word choice and thoughts expressed",
                  option4: "By reading the whole text",
                  answer: "3",
                },
                {
                  quiz: "What is Assonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of a consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "1",
                },
                {
                  quiz: "What is Consonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of the middle or final consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "2",
                },
                {
                  quiz: "What is personification?",
                  option1: "It is use of human qualities to describe humans",
                  option2:
                    "It is use of human qualities to describe living things",
                  option3:
                    "It is use of human qualities to describe animals, things, or events",
                  option4: "It is use of human qualities to describe people",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the qualities of a good poem as we learned in this lesson?",
                  option1:
                    "Should feature Strong Words, Personification, and Figurative Language",
                  option2:
                    "Should feature Good Grammar, Long Sentences, and No Prepositions",
                  option3:
                    "Should feature No Verbs, No Subject, and No Predicate",
                  option4: "All of the above",
                  answer: "1",
                },
              ],
            },
          ],
        },
        {
          quizName: "SatEve",
          tests: [
            {
              name: "May 9, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 16, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 23, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 30, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "June 6, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Patterns of Change",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can learning about different cultures teach us?",
                  option4: "Where can we find patterns in nature?",
                  answer: "4",
                },
                {
                  quiz: "What are the two kinds of Igneous Rocks we learned?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "Granite and Obsidian",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What patterns can we find in Igneous Rocks?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "Tessellations",
                  answer: "4",
                },
                {
                  quiz:
                    "What are the three kinds of Sedimentary Rocks we learned?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2: "Sandstone, Limestone, and Strata",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What patterns can we find in Sedimentary Rocks?",
                  option1: "Repetition of lines and layers",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is the first stage of The Rock Cycle?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "Sediment",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "Squeezing and cementing of sediment forms ...",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Sedimentary Rock",
                  answer: "4",
                },
              ],
            },
            {
              name: "June 13, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It said how Paul was excited about the vacation plan",
                  option2: "It said how Paul was packing for the travel",
                  option3: "It said how Paul was reluctant to travel",
                  option4:
                    "It said how Paul was telling his friends about his vacation plan",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It detailed how Paul's parents were reluctant to travel",
                  option2:
                    "It detailed how Paul expressed his anger toward the travel plan",
                  option3:
                    "It detailed how Paul's parents prepared to travel and how Paul discovered the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  option4:
                    "It detailed how Paul came to realize the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It talked about the food Uncle Art ordered for dinner and how Paul was attracted by it at first sight",
                  option2:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at first sight, but later came to like it",
                  option3:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at all",
                  option4:
                    "It talked about the food Uncle Art ordered for dinner and how Paul loved it and devoured it",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires",
                  option2:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires, and the music people loved to dance there compared to New York",
                  option3:
                    "It was about how Paul, his family, and relatives came to discover the music people loved to dance in Buenos Aires compared to New York",
                  option4:
                    "It was about how Paul, his family, and relatives couldn't discover the new sights, sounds, and languages spoken in Buenos Aires, including the music people loved to dance there",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family were scared",
                  option2:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned about the culture of soccer in Argentina",
                  option3:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family weren't impressed at all",
                  option4:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned nothing about the culture of soccer in Argentina",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It told how Paul found out that he loved soccer team colors and planned to paint his room in those colors",
                  option2:
                    "It told how Paul wanted to go back to New York as quick as possible",
                  option3:
                    "It told how Paul couldn't understand the culture of soccer in Argentina",
                  option4:
                    "It told how Paul loathed the culture of soccer in Argentina",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 20, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "Survivaland",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how four friends use their knowledge of nature to survive",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "2",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How can learning about nature be useful?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did the four friends used their knowledge of nature to get out of dangerous situations?",
                  option1:
                    "Latrice used her knowledge of sunrise to find the West direction, Raul used his knowledge about insects to get rid of the gigantic butterfly, and Juanita used her knowledge of crows to deviate the huge crow from them.",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you summarize a story?",
                  option1:
                    "By deciding which details are most important and retelling them in our own words",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "How do you decide which details are most important",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "By asking yourself if they help you understand what is happening",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "Why do we summarize stories?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "To help us remember what we read",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the most important details about the outcome of Survivaland?",
                  option1:
                    "Sunrise helped find West direction, insects strangeness helped find how to fight the gigantic butterfly, and crows preferences were used to get rid of the huge hungry crow",
                  option2:
                    "The four friends went to Survivaland, they had fun, and they got out",
                  option3:
                    "The four friends went to Survivaland, they had fun, and they didn't make it back",
                  option4:
                    "The four friends went into the game, they had fun, and they got out",
                  answer: "1",
                },
                {
                  quiz: "What is the theme of a story?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "It is title of a story",
                  option4:
                    "It is the message about life that the author thinks is important",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a story?",
                  option1: "You can do that by thinking yourself",
                  option2:
                    "You can do that by thinking about what characters say and do, and what happens to them",
                  option3:
                    "You can do that by looking at the last sentence only",
                  option4: "You can do that by looking at the title only",
                  answer: "2",
                },
                {
                  quiz:
                    'What did the characters in "Survivaland" say and or do that help conclude to the theme of the story?',
                  option1:
                    "Paul's mom said that they were going to Argentina to visit Paul's uncle and aunt",
                  option2:
                    "Paul's uncle ordered Empanadas for dinner for them on their first night in Argentina",
                  option3:
                    "Latrice knows the sun rises in the east, so she figures out that west is in the opposite direction, Raul remembered insects taste with their feet so he asked Juanita to rub onions on herself to irritate and drive away the gigantic butterfly, and Juanita knew crows are attracted to shiny stuffs so she dumped her jewels in their opposite direction to get safe",
                  option4: "Paul's aunt said she wants to be multilingual",
                  answer: "3",
                },
                {
                  quiz:
                    'What happened to the characters in "Survivaland" that help conclude to the theme of the story?',
                  option1: "Paul's family was going to England",
                  option2:
                    "The characters run west to safety, the giant butterfly ran away, and the crow followed the jewels and left them",
                  option3: "Paul's family was going to France for vacation",
                  option4:
                    "Paul's family was going to Beijing to visit his aunt and uncle",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "There's always a way out!",
                  option2: "Do not judge a book by its cover",
                  option3: "Never read a book",
                  option4: "Do not open your book",
                  answer: "1",
                },
                {
                  quiz: "How did you know that text was fantasy?",
                  option1:
                    "The selection had a made-up setting, where the four friends suddenly traveled into the game, which is not possible in real life, and it included imaginary characters like the gigantic butterfly and the huge crow and events like when they rubbed their faces and suddenly came back to the normal world are things that do not exist in real life",
                  option2: "I just knew it",
                  option3: "My friend told me",
                  option4: "I guessed it",
                  answer: "1",
                },
                {
                  quiz: "What are other features of a fantasy text genre?",
                  option1:
                    "Where Paul says he wants to go to France sounds real and tells how he is attracted by French culture",
                  option2:
                    "Where Paul's dad is ordering the food while in Argentina sounds real and tells how he is a foodaholic",
                  option3:
                    "Where Paul's mom is talking about the birds in Argentina sounds real and tells how she is attracted by birds",
                  option4:
                    "May include sensory language and or personification",
                  answer: "4",
                },
                {
                  quiz: "What is sensory language?",
                  option1: "It is some text in the book",
                  option2: "It is what animals say",
                  option3:
                    "It is language that involves the five senses: touch, sight, taste, sound, smell",
                  option4: "all of the above",
                  answer: "3",
                },
                {
                  quiz: "What is personification?",
                  option1:
                    "Personification gives human qualities to objects or animals",
                  option2: "They are in the end",
                  option3: "They are in the middle",
                  option4: "They are in the beginning",
                  answer: "1",
                },
                {
                  quiz:
                    "Which one is an example of sensory language and personification that was found in the text?",
                  option1: "Immediately following a question mark",
                  option2:
                    "The phrase onion bitterness is sensory language, and the crow announcing he is hungry is personification",
                  option3: "After a period",
                  option4: "Look for the exclamation mark",
                  answer: "2",
                },
                {
                  quiz:
                    "Which COMPARISONS context clues in the text helped you figure out the meaning of the unfamiliar or multiple meaning word immobile on page 181 and what was that meaning?",
                  option1:
                    "The COMPARISONS suddenly sprang into action and raced across help figure out the meaning of immobile. It must mean the opposite, not moving",
                  option2:
                    "The COMPARISONS sun is rising and sets in the west help figure out the meaning of ascends. It must mean the opposite of sets, going up",
                  option3:
                    "The COMPARISONS fly down and land on help figure out the meaning of hovering. It must mean the opposite, remain in place in the air",
                  option4:
                    "The COMPARISONS huh? and confused help figure out the meaning of perplexed. It must mean the same, very confused",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 27, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 4, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It said how Paul was excited about the vacation plan",
                  option2: "It said how Paul was packing for the travel",
                  option3: "It said how Paul was reluctant to travel",
                  option4:
                    "It said how Paul was telling his friends about his vacation plan",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It detailed how Paul's parents were reluctant to travel",
                  option2:
                    "It detailed how Paul expressed his anger toward the travel plan",
                  option3:
                    "It detailed how Paul's parents prepared to travel and how Paul discovered the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  option4:
                    "It detailed how Paul came to realize the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It talked about the food Uncle Art ordered for dinner and how Paul was attracted by it at first sight",
                  option2:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at first sight, but later came to like it",
                  option3:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at all",
                  option4:
                    "It talked about the food Uncle Art ordered for dinner and how Paul loved it and devoured it",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires",
                  option2:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires, and the music people loved to dance there compared to New York",
                  option3:
                    "It was about how Paul, his family, and relatives came to discover the music people loved to dance in Buenos Aires compared to New York",
                  option4:
                    "It was about how Paul, his family, and relatives couldn't discover the new sights, sounds, and languages spoken in Buenos Aires, including the music people loved to dance there",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family were scared",
                  option2:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned about the culture of soccer in Argentina",
                  option3:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family weren't impressed at all",
                  option4:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned nothing about the culture of soccer in Argentina",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It told how Paul found out that he loved soccer team colors and planned to paint his room in those colors",
                  option2:
                    "It told how Paul wanted to go back to New York as quick as possible",
                  option3:
                    "It told how Paul couldn't understand the culture of soccer in Argentina",
                  option4:
                    "It told how Paul loathed the culture of soccer in Argentina",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 11, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was Unit 4 about?",
                  option1: "How do we explore plants?",
                  option2: "How do we go to school?",
                  option3: "How do we decide what is important?",
                  option4: "How do we ride a bike?",
                  answer: "3",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Praying",
                  option2: "Sharing Stories",
                  option3: "Dancing",
                  option4: "Learning to cook",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "What can we do to improve our reading",
                  option2: "What are the kinds of tales?",
                  option3:
                    "What kinds of stories do we tell and why do we tell them?",
                  option4: "What can we bring to a picnic",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn?",
                  option1: "8",
                  option2: "10",
                  option3: "12",
                  option4: "14",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story we read last class?",
                  option1: "Types of Rocks",
                  option2: "Plants and Nature",
                  option3: "How Mighty Kate Stopped the Train",
                  option4: "A devised plan",
                  answer: "3",
                },
                {
                  quiz: "What was the story about?",
                  option1: "About a girl collecting plants",
                  option2: "About four friends playing a game",
                  option3: "About a heroic young girl who saves the day",
                  option4: "About types of rocks",
                  answer: "3",
                },
                {
                  quiz: "How did the author tell the story?",
                  option1: "In a dull way",
                  option2: "In a fantastic way",
                  option3: "In an angry way",
                  option4: "In a rushed way",
                  answer: "2",
                },
                {
                  quiz: "Why did the author tell the story that way?",
                  option1: "To tell the reader what to do",
                  option2: "To catch the reader's attention",
                  option3: "To drive away the reader",
                  option4: "To make the story sound scary",
                  answer: "2",
                },
                {
                  quiz: "How did you know the story was a Tall Tale?",
                  option1: "It had a larger-than-life character, Kate",
                  option2:
                    "It described events that couldn't happen in real life such as the author said Kate's whistle traveled kilometers",
                  option3:
                    "It had humorous exaggeration and hyperbole where Kate yanked up workers in distress with one hand",
                  option4: "All of the above",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 18, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What patterns are found in sedimentary rocks?",
                  option1: "Limestone, Marble, and Sandstone",
                  option2: "Granite and Obsidian",
                  option3: "Blackstone, Whitestone and Cactus",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Where can we see the patterns found in sedimentary rocks?",
                  option1: "In the sky",
                  option2: "In deserts or sea and beaches or riverbanks",
                  option3: "In the house",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do rocks change?",
                  option1: "They move from one place to another",
                  option2: "They get transported by people",
                  option3:
                    "Water, wind, and temperature over long periods of time erode and change them, and even shape and sketch designs on them",
                  option4: "They turn into plants and other living things",
                  answer: "3",
                },
                {
                  quiz: "How are Igneous rocks formed?",
                  option1:
                    "They are formed after the wind blows trees down and those trees decay and accumulate to form Igneous rock.",
                  option2:
                    "They are formed after hard rocks get crushed by people as they walk on it and eventually split into Igneous rock.",
                  option3:
                    "They are formed after hot gas far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually turns into crystals of Igneous rock.",
                  option4:
                    "They are formed after hot liquid rock called magma or lava far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually slowly cools to form crystals of Igneous rock.",
                  answer: "4",
                },
                {
                  quiz:
                    'What was the main idea of the section "Sedimentary Rocks" on page 196 of Reading Writing Workshop?',
                  option1: "Sedimentary rocks could be used as soccer balls",
                  option2: "Air will get compressed into sedimentary rocks",
                  option3:
                    "Particles such as sand or bones and shells form different sedimentary rocks",
                  option4: "Sedimentary rocks are extremely hard",
                  answer: "3",
                },
                {
                  quiz:
                    'What was the main idea of the section "Rock Formations" on page 196 of Reading Writing Workshop?',
                  option1: "Rock formations are so beautiful",
                  option2:
                    "Layers of sedimentary rock create different rock formations",
                  option3: "Rock formations are very rare and scarce",
                  option4:
                    "Soil particles accumulate in the air to create rock formations",
                  answer: "2",
                },
                {
                  quiz:
                    'How did you know the selection "Patterns of Change" was an expository text?',
                  option1:
                    "It provided evidence and gave reasons why patterns occur, supported them with facts and concrete details, and included diagrams that illustrated information",
                  option2:
                    "It had imaginary characters that couldn't exist in real life",
                  option3:
                    "The setting was all made-up and the events were too unrealistic",
                  option4: "It had hero with a set of tasks to accomplish",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "geo"?',
                  option1: "Earth",
                  option2: "Sun",
                  option3: "Moon",
                  option4: "Water",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "logy"?',
                  option1: "Eat",
                  option2: "Life",
                  option3: "Play",
                  option4: "Study",
                  answer: "4",
                },
                {
                  quiz: 'What is the meaning of the greek root "chrono"?',
                  option1: "Pet",
                  option2: "History",
                  option3: "Time",
                  option4: "Fast",
                  answer: "3",
                },
              ],
            },
            {
              name: "July 25, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 1, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 8, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was Unit 4 about?",
                  option1: "How do we explore plants?",
                  option2: "How do we go to school?",
                  option3: "How do we decide what is important?",
                  option4: "How do we ride a bike?",
                  answer: "3",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Praying",
                  option2: "Sharing Stories",
                  option3: "Dancing",
                  option4: "Learning to cook",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "What can we do to improve our reading",
                  option2: "What are the kinds of tales?",
                  option3:
                    "What kinds of stories do we tell and why do we tell them?",
                  option4: "What can we bring to a picnic",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn?",
                  option1: "8",
                  option2: "10",
                  option3: "12",
                  option4: "14",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story we read last class?",
                  option1: "Types of Rocks",
                  option2: "Plants and Nature",
                  option3: "How Mighty Kate Stopped the Train",
                  option4: "A devised plan",
                  answer: "3",
                },
                {
                  quiz: "What was the story about?",
                  option1: "About a girl collecting plants",
                  option2: "About four friends playing a game",
                  option3: "About a heroic young girl who saves the day",
                  option4: "About types of rocks",
                  answer: "3",
                },
                {
                  quiz: "How did the author tell the story?",
                  option1: "In a dull way",
                  option2: "In a fantastic way",
                  option3: "In an angry way",
                  option4: "In a rushed way",
                  answer: "2",
                },
                {
                  quiz: "Why did the author tell the story that way?",
                  option1: "To tell the reader what to do",
                  option2: "To catch the reader's attention",
                  option3: "To drive away the reader",
                  option4: "To make the story sound scary",
                  answer: "2",
                },
                {
                  quiz: "How did you know the story was a Tall Tale?",
                  option1: "It had a larger-than-life character, Kate",
                  option2:
                    "It described events that couldn't happen in real life such as the author said Kate's whistle traveled kilometers",
                  option3:
                    "It had humorous exaggeration and hyperbole where Kate yanked up workers in distress with one hand",
                  option4: "All of the above",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 15, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4: "How to pronounce diphthongs",
                  answer: "3",
                },
                {
                  quiz: "What are pronouns?",
                  option1: "They are common nouns",
                  option2: "They are words that replace nouns",
                  option3: "They are nouns",
                  option4: "They are verbs",
                  answer: "2",
                },
                {
                  quiz: "What are antecedents?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are words that pronouns replace",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are indefinite pronouns?",
                  option1:
                    "They are pronouns that are in the middle of the sentence",
                  option2:
                    "They are pronouns that are in the end of the sentence",
                  option3:
                    "They are pronouns that are in the beginning of the sentence",
                  option4:
                    "They are pronouns that refer to something or someone not specific",
                  answer: "4",
                },
                {
                  quiz: "What is pronoun-antecedent agreement?",
                  option1: "They must match in gender only",
                  option2: "They must match in number only",
                  option3: "They must match in number and gender",
                  option4: "They must match in agreement",
                  answer: "3",
                },
                {
                  quiz:
                    "What kind of text did we practice to write last class?",
                  option1: "Poem",
                  option2: "Opinion essay",
                  option3: "Narrative text",
                  option4: "Informative text",
                  answer: "3",
                },
                {
                  quiz: "Which is a way to make a narrative text fun?",
                  option1: "Use formal voice",
                  option2: "Use informal voice",
                  option3: "Use transition words",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you describe scenes precisely?",
                  option1: "By using many words",
                  option2: "By using sensory details",
                  option3: "By using verbs",
                  option4: "By using nouns",
                  answer: "2",
                },
                {
                  quiz: "How do you reinforce ideas in a narrative text?",
                  option1: "By changing the style and tone",
                  option2: "By using more words",
                  option3: "By using sensory details",
                  option4: "By using figurative language",
                  answer: "4",
                },
                {
                  quiz: "What narrative text did we write last class?",
                  option1: "Where Kate whistled",
                  option2: "Where Kate tossed a boulder",
                  option3: "Where Kate wrung the wet log",
                  option4: "Where babe Kate picked up her doc",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 22, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4: "How to pronounce diphthongs",
                  answer: "3",
                },
                {
                  quiz: "What are pronouns?",
                  option1: "They are common nouns",
                  option2: "They are words that replace nouns",
                  option3: "They are nouns",
                  option4: "They are verbs",
                  answer: "2",
                },
                {
                  quiz: "What are antecedents?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are words that pronouns replace",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are indefinite pronouns?",
                  option1:
                    "They are pronouns that are in the middle of the sentence",
                  option2:
                    "They are pronouns that are in the end of the sentence",
                  option3:
                    "They are pronouns that are in the beginning of the sentence",
                  option4:
                    "They are pronouns that refer to something or someone not specific",
                  answer: "4",
                },
                {
                  quiz: "What is pronoun-antecedent agreement?",
                  option1: "They must match in gender only",
                  option2: "They must match in number only",
                  option3: "They must match in number and gender",
                  option4: "They must match in agreement",
                  answer: "3",
                },
                {
                  quiz:
                    "What kind of text did we practice to write last class?",
                  option1: "Poem",
                  option2: "Opinion essay",
                  option3: "Narrative text",
                  option4: "Informative text",
                  answer: "3",
                },
                {
                  quiz: "Which is a way to make a narrative text fun?",
                  option1: "Use formal voice",
                  option2: "Use informal voice",
                  option3: "Use transition words",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you describe scenes precisely?",
                  option1: "By using many words",
                  option2: "By using sensory details",
                  option3: "By using verbs",
                  option4: "By using nouns",
                  answer: "2",
                },
                {
                  quiz: "How do you reinforce ideas in a narrative text?",
                  option1: "By changing the style and tone",
                  option2: "By using more words",
                  option3: "By using sensory details",
                  option4: "By using figurative language",
                  answer: "4",
                },
                {
                  quiz: "What narrative text did we write last class?",
                  option1: "Where Kate whistled",
                  option2: "Where Kate tossed a boulder",
                  option3: "Where Kate wrung the wet log",
                  option4: "Where babe Kate picked up her doc",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 29, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Take Action",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3:
                    "What can people do to bring about a positive change?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "20",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About what Frederick Douglass did to bring about a positive change for African Americans",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "2",
                },
                {
                  quiz:
                    "What did Frederick Douglass do to bring about a positive change for African Americans?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "Some said it was a calculator and others said it was a language",
                  option4:
                    "Spoke against slavery, exposed the horrors of slavery, wrote a book, started his own abolitionist newspaper, and worked tirelessly to end segregation.",
                  answer: "4",
                },
                {
                  quiz: "What should summaries say?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "As you read and or in the end",
                  option3: "Only what is in the text",
                  option4: "Only in the end",
                  answer: "3",
                },
                {
                  quiz: "How do you find the author's point of view?",
                  option1:
                    "By finding the key details of each section of the text and summarizing what do they have in common",
                  option2: "To be happy",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "1",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It told facts about the life of Fredrick Douglass, described its talents and achievements, and was written in logical order",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between a prefix and a suffix?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3:
                    "A prefix is a word part added to the beginning of another word to change its meaning, meanwhile a suffix is added to the end",
                  option4: "Paragraph clues",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 5, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What did we learn about homographs last class?",
                  option1: "They are spelled the same",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What else did we learn about homographs last class?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "May sound the same or not",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the last thing we learned about homographs last class?",
                  option1: "Differ in meaning",
                  option2: "Must be different words",
                  option3: "Have the same meaning",
                  option4: "Always sound the same",
                  answer: "1",
                },
                {
                  quiz: "How do pronouns and verbs agree?",
                  option1: "They never agree in any ways",
                  option2: "They don't need to agree",
                  option3: "They agree in number and gender",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you form pronoun-verb contractions?",
                  option1:
                    "By putting a pronoun and verb together and using an apostrophe to replace the omitted letters",
                  option2:
                    "By putting a pronoun and verb together and leaving no letter out",
                  option3: "By replacing a pronoun with a verb together",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "Can you abbreviate state names on envelopes?",
                  option1: "Yes",
                  option2: "No",
                  option3: "Never",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods on abbreviations that are read like words?",
                  option1: "No",
                  option2: "Yes",
                  option3: "Always",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods with abbreviations of measure units in the metric system?",
                  option1: "No",
                  option2: "Sometimes",
                  option3: "Yes",
                  option4: "Always",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you double the period at the end of a sentence ending with an abbreviation?",
                  option1: "No",
                  option2: "Always",
                  option3: "Sometimes",
                  option4: "Yes",
                  answer: "1",
                },
                {
                  quiz: "How do you write a good informative text?",
                  option1: "Use repetition, rhyme, and stanzas",
                  option2:
                    "Use figurative language, informal voice, and dialogue",
                  option3:
                    "Develop the topic, use logical order text structure, and finish with a strong conclusion",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 12, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Consider Our Resources",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3: "Why are natural resources valuable?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "14",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4: "About the ways natural resources provide energy?",
                  answer: "1",
                },
                {
                  quiz: "How are natural resources valuable?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "The sun helps heat our planet, coal is burned to heat our homes, and oil is transformed into gasoline to power our cars",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "3",
                },
                {
                  quiz:
                    "What ways did the text suggest that individuals can save energy?",
                  option1:
                    "By asking and answering questions about those details",
                  option2:
                    "Turning off lights, TVs, computers, and other devices when they are not using them",
                  option3: "Only as you read",
                  option4: "Only in the end",
                  answer: "2",
                },
                {
                  quiz:
                    "What are some of the things you said you could do personally to save energy?",
                  option1: "To help us read well",
                  option2: "Use less appliances",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It explained why natural resources are valuable, presented information in logical order, and presented them in a chart",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2:
                    "Surrounding definition and restatement context clues",
                  option3: "Same sentence context clues",
                  option4: "Paragraph clues",
                  answer: "2",
                },
                {
                  quiz: "What sound did we learn to read last class?",
                  option1: "Open syllable",
                  option2: "r-controlled vowel syllables",
                  option3: "Closed syllable",
                  option4:
                    "The sound of the letters ture, cher, tcher, and zure",
                  answer: "4",
                },
                {
                  quiz: "What kind of pronouns did we learn last class?",
                  option1: "Irregular verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "Possessive pronouns and reflexive pronouns",
                  answer: "1",
                },
                {
                  quiz: "What did we say about apostrophes?",
                  option1:
                    "They are used in dialogues, making the possessive, and contractions",
                  option2: "They link the subject and a word in the predicate",
                  option3: "They help the main verb",
                  option4:
                    "They do not end in -ed to form the past tense and have special spellings when used with have in the perfect or progressive tenses",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about summarizing a text?",
                  option1: "Have ride",
                  option2:
                    "We said we use the most important ideas from the text and do not include our own opinions",
                  option3: "Have ridden",
                  option4: "Have rid",
                  answer: "3",
                },
                {
                  quiz:
                    "What did we learn about how to find the author's point of view?",
                  option1: "Pay attention to the words that the author chose",
                  option2: "Have take",
                  option3: "Have took",
                  option4: "Have taked",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about writing an opinion essay?",
                  option1: "Have be",
                  option2:
                    "It should start with a strong opening, provide reasons and evidence, and use transitions",
                  option3: "Have is",
                  option4: "Have was",
                  answer: "2",
                },
                {
                  quiz: "Which of the following are reflexive pronouns?",
                  option1: "Him, her, and them",
                  option2: "He, she, and it",
                  option3: "Myself, hisself, and yourself",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come before the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "Hers and his",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come after the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "We and they",
                  answer: "3",
                },
                {
                  quiz: "What is the use of a chart?",
                  option1:
                    "Use precise language, use transitions, and include reasons and evidence",
                  option2: "Write many conclusions",
                  option3:
                    "It represents facts visually to allow readers to compare and contrast information",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 19, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Patterns of Change",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can learning about different cultures teach us?",
                  option4: "Where can we find patterns in nature?",
                  answer: "4",
                },
                {
                  quiz: "What are the two kinds of Igneous Rocks we learned?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "Granite and Obsidian",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What patterns can we find in Igneous Rocks?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "Tessellations",
                  answer: "4",
                },
                {
                  quiz:
                    "What are the three kinds of Sedimentary Rocks we learned?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2: "Sandstone, Limestone, and Strata",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What patterns can we find in Sedimentary Rocks?",
                  option1: "Repetition of lines and layers",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is the first stage of The Rock Cycle?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "Sediment",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "Squeezing and cementing of sediment forms ...",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Sedimentary Rock",
                  answer: "4",
                },
              ],
            },
            {
              name: "September 26, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Making It Happen",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3: "How do you prepare for a picnic?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "4",
                },
                {
                  quiz: "What is a lyric poetry?",
                  option1: "It is a poem that contains rhyme and alliteration",
                  option2: "It is a short poem",
                  option3: "It is a poem that tells a story",
                  option4: "It is a long poem",
                  answer: "1",
                },
                {
                  quiz: "What is a free verse?",
                  option1: "It is a poem that tells a story",
                  option2: "It is a long poem",
                  option3: "It is a short poem",
                  option4:
                    "It is a poem that has no rhyming pattern, meter or line length",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a poem?",
                  option1:
                    "It is the repeated use of words, sounds or phrases for effect or emphasis",
                  option2: "It is the repeated use of punctuations",
                  option3: "By identifying poetic elements and key details",
                  option4: "It is the repeated use of the same title",
                  answer: "3",
                },
                {
                  quiz: "What is rhyme in poetry?",
                  option1: "It is the repetition of the same consonant sound",
                  option2: "It is the repetition of the same vowel sound",
                  option3: "It is the repetition of the same word",
                  option4: "It is the repetition of the same letter",
                  answer: "2",
                },
                {
                  quiz: "What is alliteration?",
                  option1:
                    "They're words that are spelled the same and have the same meaning",
                  option2:
                    "It is the presence of the same consonant sound in the beginning of two or more words",
                  option3:
                    "They're words that are spelled the same but have different meanings and may or may not have the same pronunciation",
                  option4:
                    "They're words that are not spelled the same but have the same meaning",
                  answer: "2",
                },
                {
                  quiz: "What is meter in poetry?",
                  option1:
                    "It is the rhythm or regular pattern of sounds in a line",
                  option2: "It's the same as its denotation",
                  option3: "Guess it from its letters",
                  option4: "Use context clues to figure out the meaning",
                  answer: "1",
                },
                {
                  quiz: "What is stanza in poetry?",
                  option1: "Foreshadowing and Imagery",
                  option2: "Effect and Emphasis",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between simile and metaphor?",
                  option1: "In unity there's strength",
                  option2: "It takes two to tango",
                  option3: "Hope is the source of life",
                  option4:
                    "Simile uses words like or as to make a comparison, but metaphor makes a comparison without them",
                  answer: "4",
                },
              ],
            },
            {
              name: "October 17, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "3",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "16",
                  answer: "1",
                },
                {
                  quiz: "How is making predictions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us read with purpose",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast characters.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is realistic fiction?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it features events and settings typical of the time period in which the story is set",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is an idiom?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is an expression that cannot be defined by the words in it",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3:
                    "They are words that sound the same, but are spelled differently and have different meaning",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What is a dependent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an independent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "October 24, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "4",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "3",
                },
                {
                  quiz: "How did Miguel change after entering Middle School?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What caused him to change?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "He became friend with Jake",
                  answer: "4",
                },
                {
                  quiz:
                    "How can making predictions help us better understand the text?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What can you compare and contrast in a story?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is Realistic Fiction?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3:
                    "It is where characters and settings may actually exist in real life",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "What context clues did we talk about in the class?",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Comparisons",
                  answer: "4",
                },
              ],
            },
            {
              name: "October 31, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "4",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "3",
                },
                {
                  quiz: "How did Miguel change after entering Middle School?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What caused him to change?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "He became friend with Jake",
                  answer: "4",
                },
                {
                  quiz:
                    "How can making predictions help us better understand the text?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What can you compare and contrast in a story?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is Realistic Fiction?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3:
                    "It is where characters and settings may actually exist in real life",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "What context clues did we talk about in the class?",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Comparisons",
                  answer: "4",
                },
              ],
            },
            {
              name: "November 7, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce the suffixes less, ist, ion, and ful, and how to use their meaning to infer unfamiliar words based of them",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix less?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the suffix ist?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means person who studies",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the suffix ion?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means the act of",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix ful?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means full of",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What did we learn under grammar last class?",
                  option1: "Adjectives",
                  option2: "Present tense verbs",
                  option3: "Pronouns",
                  option4:
                    "Independent and dependent clauses, and appositives and commas",
                  answer: "4",
                },
                {
                  quiz:
                    "What is the difference between an independent clause and a dependent clause?",
                  option1:
                    "The former has many words but the latter has few words",
                  option2:
                    "The former can stand on its own meanwhile the latter cannot",
                  option3: "The former is a clause but the other is not",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "What is the relationship between appositives and commas?",
                  option1:
                    "Commas appear before and immediately after appositives",
                  option2: "Commas only appear before appositives",
                  option3: "Commas only appear after appositives",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing opening linking word?",
                  option1: "As you can see",
                  option2: "Lastly",
                  option3: "First",
                  option4: "I believe",
                  answer: "4",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing closing linking word?",
                  option1: "As you can see",
                  option2: "Third",
                  option3: "Also",
                  option4: "The next",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 14, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce the suffixes less, ist, ion, and ful, and how to use their meaning to infer unfamiliar words based of them",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix less?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the suffix ist?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means person who studies",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the suffix ion?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means the act of",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix ful?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means full of",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What did we learn under grammar last class?",
                  option1: "Adjectives",
                  option2: "Present tense verbs",
                  option3: "Pronouns",
                  option4:
                    "Independent and dependent clauses, and appositives and commas",
                  answer: "4",
                },
                {
                  quiz:
                    "What is the difference between an independent clause and a dependent clause?",
                  option1:
                    "The former has many words but the latter has few words",
                  option2:
                    "The former can stand on its own meanwhile the latter cannot",
                  option3: "The former is a clause but the other is not",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "What is the relationship between appositives and commas?",
                  option1:
                    "Commas appear before and immediately after appositives",
                  option2: "Commas only appear before appositives",
                  option3: "Commas only appear after appositives",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing opening linking word?",
                  option1: "As you can see",
                  option2: "Lastly",
                  option3: "First",
                  option4: "I believe",
                  answer: "4",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing closing linking word?",
                  option1: "As you can see",
                  option2: "Third",
                  option3: "Also",
                  option4: "The next",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 21, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Our Changing Earth",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "What changes in the environment affect living things?",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "4",
                },
                {
                  quiz:
                    "How is asking and answering questions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast ideas.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is expository text?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is a graph?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are photographs?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are captions?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "They are words that add information to a photograph",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: 'What is the meaning of the prefix "dis"?',
                  option1: "It means not or absence of or opposite of",
                  option2: "It means before",
                  option3: "It means wrong",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 28, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "CHANGING VIEWS OF EARTH",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About how our understanding of Earth has changed along with scientific developments over time",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "How can scientific knowledge change over time?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz:
                    "What was the effect of flight on our knowledge about Earth?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4:
                    "Permitted to launch satellites in space to achieve new breakthroughs",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Helps stay focused",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you call cause and effect events where the effect of the previous event is the cause of the current one?",
                  option1: "Cause-Effect Chain",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "1",
                },
                {
                  quiz: "What is a diagram?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3:
                    "It’s a drawing that shows the different parts of something and how they relate to each other",
                  option4: "Repetition of shoes and cars",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "geo"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Earth",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "helio"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Sun",
                  option4: "Igneous Rock",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 5, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Scientific Viewpoints",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "What benefits come from people working as a group?",
                  option4:
                    "How do natural events and human activities affect the environment?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "11",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About two different views on the arrival of new species into the U.S.",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "What where the uses of species introduced in the U.S.?",
                  option1:
                    "Some like horses were used for work, transportation, and recreation",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz:
                    "What where the harmful effects of species introduced in the U.S.?",
                  option1:
                    "Some like the Med. Fruit Fly destroyed native plants like citrus.",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What did we say about how you make sure to understand a persuasive article last class?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "By asking and answering questions",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What skill did we learn that you can use to understand a persuasive article last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Author's Point of View",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to persuade me to agree with the author's viewpoint with some evidence and a chart",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Biography",
                  option3: "Persuasive Article ",
                  option4: "Expository Text",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 12, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Scientific Viewpoints",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "What benefits come from people working as a group?",
                  option4:
                    "How do natural events and human activities affect the environment?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "11",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About two different views on the arrival of new species into the U.S.",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "What where the uses of species introduced in the U.S.?",
                  option1:
                    "Some like horses were used for work, transportation, and recreation",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz:
                    "What where the harmful effects of species introduced in the U.S.?",
                  option1:
                    "Some like the Med. Fruit Fly destroyed native plants like citrus.",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What did we say about how you make sure to understand a persuasive article last class?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "By asking and answering questions",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What skill did we learn that you can use to understand a persuasive article last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Author's Point of View",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to persuade me to agree with the author's viewpoint with some evidence and a chart",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Biography",
                  option3: "Persuasive Article ",
                  option4: "Expository Text",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 19, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Joining forces",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4: "How do different groups contribute to a cause?",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "2",
                },
                {
                  quiz: "How is summarizing while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you find the theme of stories like the one we read last class?",
                  option1: "By comparing and contrasting phonics",
                  option2: "By comparing and contrasting grammar",
                  option3:
                    "By paying attention to what the characters do and say and what happens to them.",
                  option4: "By comparing and contrasting letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is historical fiction?",
                  option1:
                    "If it features events and settings typical of the period in which the story is set.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "1",
                },
                {
                  quiz: "What is a Flashback?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3:
                    "It is a description of events and actions that occurred before the main action of the story",
                  option4: "It is an expression that has no meaning",
                  answer: "3",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4:
                    "They are words that sound the same but are spelled differently and have different meanings",
                  answer: "4",
                },
                {
                  quiz: "What part of speech are words with the -ion suffix?",
                  option1: "Verbs",
                  option2: "Nouns",
                  option3: "Adjectives",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an Adverb?",
                  option1: "It is a word that tells more about the verb",
                  option2: "It is an adjective",
                  option3: "It is a different verb",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 26, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What were the 3 features we learned a good narrative text should have last class?",
                  option1:
                    "Sequence, Develop Character and Figurative Language",
                  option2:
                    "Cause-Effect Chain, Author's point of view and Main Idea",
                  option3: "Similarities, Differences and Definitions",
                  option4: "Drama, Expository and Informational",
                  answer: "1",
                },
                {
                  quiz: "What was the text we wrote last class about?",
                  option1:
                    "About Libby's reaction to her father's comment on her poem in a letter addressed to her",
                  option2:
                    "About Libby's reaction to her brother's comment on her poem in a letter addressed to her",
                  option3:
                    "About Libby's reaction to her sister's comment on her poem in a letter addressed to her",
                  option4:
                    "About Libby's reaction to her friend's comment on her poem in a letter addressed to her",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the weekly concept of the new lesson last class?",
                  option1: "Getting Along",
                  option2: "Praying Together",
                  option3: "Helping Each Other",
                  option4: "Eating Together",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the essential question of the new lesson last class?",
                  option1: "What actions can we take to get along with others?",
                  option2: "What actions can we take to pray together?",
                  option3: "What actions can we take to help each other?",
                  option4: "What actions can we take to eat together?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "16",
                  option2: "14",
                  option3: "12",
                  option4: "8",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "The Bully",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3: "About how one student tries to deal with a bully",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "How did Ramon's advice affected Michael's problem with J.T.?",
                  option1: "It helped him kick J.T.",
                  option2:
                    "It helped him solve his feud with J.T. and they eventually became friends",
                  option3: "It helped him punch J.T.",
                  option4: "It helped him yell at J.T.",
                  answer: "2",
                },
                {
                  quiz:
                    "What advice would you give to someone being bullied and why?",
                  option1:
                    "Tell that person to report to his or her parents for protection",
                  option2: "Ask that person to cry out for relief",
                  option3: "Ask that person to fight back to gain respect",
                  option4:
                    "Report to the teacher for he or she can counsel both",
                  answer: "4",
                },
              ],
            },
            {
              name: "January 2, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What were the 3 features we learned a good narrative text should have last class?",
                  option1:
                    "Sequence, Develop Character and Figurative Language",
                  option2:
                    "Cause-Effect Chain, Author's point of view and Main Idea",
                  option3: "Similarities, Differences and Definitions",
                  option4: "Drama, Expository and Informational",
                  answer: "1",
                },
                {
                  quiz: "What was the text we wrote last class about?",
                  option1:
                    "About Libby's reaction to her father's comment on her poem in a letter addressed to her",
                  option2:
                    "About Libby's reaction to her brother's comment on her poem in a letter addressed to her",
                  option3:
                    "About Libby's reaction to her sister's comment on her poem in a letter addressed to her",
                  option4:
                    "About Libby's reaction to her friend's comment on her poem in a letter addressed to her",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the weekly concept of the new lesson last class?",
                  option1: "Getting Along",
                  option2: "Praying Together",
                  option3: "Helping Each Other",
                  option4: "Eating Together",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the essential question of the new lesson last class?",
                  option1: "What actions can we take to get along with others?",
                  option2: "What actions can we take to pray together?",
                  option3: "What actions can we take to help each other?",
                  option4: "What actions can we take to eat together?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "16",
                  option2: "14",
                  option3: "12",
                  option4: "8",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "The Bully",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3: "About how one student tries to deal with a bully",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "How did Ramon's advice affected Michael's problem with J.T.?",
                  option1: "It helped him kick J.T.",
                  option2:
                    "It helped him solve his feud with J.T. and they eventually became friends",
                  option3: "It helped him punch J.T.",
                  option4: "It helped him yell at J.T.",
                  answer: "2",
                },
                {
                  quiz:
                    "What advice would you give to someone being bullied and why?",
                  option1:
                    "Tell that person to report to his or her parents for protection",
                  option2: "Ask that person to cry out for relief",
                  option3: "Ask that person to fight back to gain respect",
                  option4:
                    "Report to the teacher for he or she can counsel both",
                  answer: "4",
                },
              ],
            },
            {
              name: "January 9, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "Mysterious Oceans",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2:
                    "How are living things adapted to their environment?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "What was a way sea creatures adapt to the deep ocean?",
                  option1: "By singing",
                  option2: "Through playing",
                  option3: "By sleeping",
                  option4: "Actively forage for food",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Help check our understanding of complex ideas",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you figure out cause and effect relationships in a text?",
                  option1: 'By looking for cues such as "because of" ',
                  option2: "By closing the book",
                  option3: "By rewriting the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a map?",
                  option1: "It's a photo",
                  option2: "it's a picture",
                  option3: "It’s the flat picture of an area",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "dormant"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Running",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "agile"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Move quickly and easily",
                  answer: "4",
                },
              ],
            },
            {
              name: "January 16, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonics skill did we practice in this class?",
                  option1: "Syllabication",
                  option2: "Inflectional Endings",
                  option3: "Rhymes",
                  option4: "Words from Mythology",
                  answer: "4",
                },
                {
                  quiz: "Where did the meaning of the word Fortune come from?",
                  option1: "From Janus Roman god of beginnings",
                  option2:
                    "From Atlas Greek giant who supported the world on his shoulders",
                  option3: "From Luna Roman goddess of the moon",
                  option4: "From Fortuna Roman goddess of luck",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar skill did we learn and practice in this class?",
                  option1: "Homophones",
                  option2: "Negatives and Negative Contractions",
                  option3: "Antonyms",
                  option4: "Plurals",
                  answer: "2",
                },
                {
                  quiz: "What did we say were Negatives?",
                  option1: "Negatives are words that mean yes",
                  option2: "Negatives are words that mean happy",
                  option3: "Negatives are words that mean run",
                  option4: "Negatives are words that mean no",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar usage did we learn and practice in this class?",
                  option1: "Capitalization in emails",
                  option2: "Capitalization in letters",
                  option3: "How to correct Double Negatives",
                  option4: "How to use plurals",
                  answer: "3",
                },
                {
                  quiz: "What did we say was double negative?",
                  option1: "When there are two negatives in the same clause.",
                  option2: "When there are three negatives in the same clause.",
                  option3: "When there are no negatives in the same clause.",
                  option4: "When there are four negatives in the same clause.",
                  answer: "1",
                },
                {
                  quiz: "What is one way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By changing 1 negative to a positive",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What is another way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By eliminating one of the negative words",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What type of essay did we learn in this class?",
                  option1: "Dialogue",
                  option2: "Informative Text",
                  option3: "Opinon Essay",
                  option4: "Realistic Fiction",
                  answer: "2",
                },
                {
                  quiz:
                    "What were the 3 key points we practiced during the writing?",
                  option1:
                    "Develop a Topic, Use good Sentence Structures, and a Strong Conclusion",
                  option2: "Use Figurative Language only",
                  option3: "pay attention to verbs",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 23, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this class?",
                  option1: "Making a Difference",
                  option2: "Working Hard",
                  option3: "Prayers",
                  option4: "Bravery",
                  answer: "1",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "What impact do our actions have on our world?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "How many vocabulary did we learn in this class?",
                  option1: "12",
                  option2: "11",
                  option3: "10",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "Words to Save the World",
                  option4: "Mysterious Oceans",
                  answer: "3",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how the biologist Rachel Carson used the power of writing to change the world",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "2",
                },
                {
                  quiz:
                    "What impact did the publication of Silent Spring have on the makers of pesticides such as DDT?",
                  option1: "It made them struggle to counter Rachel's claims",
                  option2: "It made them cry",
                  option3: "It made them make more money",
                  option4: "It made them close their companies",
                  answer: "1",
                },
                {
                  quiz: "When to ask and answer questions about a text?",
                  option1: "During reading only",
                  option2: "After reading only",
                  option3: "Before, during, and after reading",
                  option4: "Only before reading",
                  answer: "3",
                },
                {
                  quiz: "Why did Rachel write about pesticide abuse?",
                  option1: "Because their friend reported its harm",
                  option2: "Because their friend said how good they were",
                  option3: "Because their friend didn't like it",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What comprehension skill did we practice in this lesson?",
                  option1: "Problem and solution",
                  option2: "Antonyms",
                  option3: "Synonyms",
                  option4: "Paragraphs",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 30, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What special feature of a biography did we learn and practice in this class?",
                  option1: "Illustrations",
                  option2: "Maps",
                  option3: "Graphs",
                  option4: "Maps",
                  answer: "1",
                },
                {
                  quiz:
                    "What 3 details helped us understand the subject of the biography we read in this lesson?",
                  option1:
                    "The illustration on page 425, that on page 426, and the one on page 427",
                  option2:
                    "The illustration on page 420, that on page 421, and the one on page 422",
                  option3:
                    "The map on page 425, that on page 426, and the one on page 427",
                  option4:
                    "The graph on page 425, that on page 426, and the one on page 427",
                  answer: "1",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words in this class?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
                {
                  quiz: "What are synonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "1",
                },
                {
                  quiz: "What are antonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "2",
                },
                {
                  quiz:
                    "How do antonyms and synonyms help you better understand the meaning of unfamiliar words?",
                  option1:
                    "The relationship between synonyms and antonyms in different texts can help you better understand the meaning of unfamiliar words",
                  option2:
                    "The relationship between synonyms and antonyms in different magazines can help you better understand the meaning of unfamiliar words",
                  option3:
                    "The relationship between synonyms and antonyms in the same sentence or paragraph can help you better understand the meaning of unfamiliar words",
                  option4:
                    "The relationship between synonyms and antonyms in different newspapers can help you better understand the meaning of unfamiliar words",
                  answer: "3",
                },
                {
                  quiz: "What number prefixes did we learn in this class?",
                  option1: "Fr-, Df-, Lo-, Co-",
                  option2: "On-, Tr-, Ez-, Yu-",
                  option3: "Un-, B-, Tr-, Ct-",
                  option4: "Uni-, Bi-, Tri-, Cent-",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Uni-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the number prefix Bi-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Cent-?",
                  option1: "Hundred",
                  option2: "Million",
                  option3: "Ten",
                  option4: "Grams",
                  answer: "1",
                },
              ],
            },
            {
              name: "February 6, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this lesson?",
                  option1: "Out in the World",
                  option2: "Out in the Space",
                  option3: "On a Holiday",
                  option4: "At Home",
                  answer: "1",
                },
                {
                  quiz: "What was the Essential Question of this lesson?",
                  option1: "What can our connections to the world teach us",
                  option2: "How do we contribute to a cause?",
                  option3: "What is best for our environment?",
                  option4: "Can we live without the sun?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn in this lesson?",
                  option1: "10",
                  option2: "9",
                  option3: "8",
                  option4: "7",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text of this lesson?",
                  option1: "Poetry",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What types of poems did we discuss in this lesson?",
                  option1: "Active and Passive",
                  option2: "Figurative and Dormant",
                  option3: "Plain and Story",
                  option4: "Lyric and Narrative",
                  answer: "4",
                },
                {
                  quiz:
                    "How do we find the point of view of the speaker in a poem?",
                  option1: "By closing the book",
                  option2: "By summarizing the text",
                  option3:
                    "By paying attention to the speaker's word choice and thoughts expressed",
                  option4: "By reading the whole text",
                  answer: "3",
                },
                {
                  quiz: "What is Assonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of a consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "1",
                },
                {
                  quiz: "What is Consonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of the middle or final consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "2",
                },
                {
                  quiz: "What is personification?",
                  option1: "It is use of human qualities to describe humans",
                  option2:
                    "It is use of human qualities to describe living things",
                  option3:
                    "It is use of human qualities to describe animals, things, or events",
                  option4: "It is use of human qualities to describe people",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the qualities of a good poem as we learned in this lesson?",
                  option1:
                    "Should feature Strong Words, Personification, and Figurative Language",
                  option2:
                    "Should feature Good Grammar, Long Sentences, and No Prepositions",
                  option3:
                    "Should feature No Verbs, No Subject, and No Predicate",
                  option4: "All of the above",
                  answer: "1",
                },
              ],
            },
          ],
        },
        {
          quizName: "SunEve",
          tests: [
            {
              name: "May 9, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 16, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 23, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "May 30, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "How can rereading a story help us understand it better?",
                  option1:
                    "It helps us check our understanding of facts and other information",
                  option2: "It helps us read many times",
                  option3: "It helps us read more",
                  option4: "It helps us read again and again",
                  answer: "1",
                },
                {
                  quiz:
                    "How do you find the sequence or order of events that happened?",
                  option1: "Look for action verbs",
                  option2: "Look fro pronouns",
                  option3:
                    "Look for signal words and phrases such as in 1917, later, today",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you know the text was a Biography?",
                  option1: "It told the true story of another person's life",
                  option2:
                    "It told the true story of another person's life, Lucy Braun, and it was equally told in the third person using the pronoun she",
                  option3:
                    "It was told in the third person using the pronoun she.",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "Which other text features helped you know the text was a Biography?",
                  option1:
                    "Text features such as speech balloons and timelines gave us more information",
                  option2:
                    "Text features such as primary and secondary sources gave us more information",
                  option3:
                    "Text features such as sidebars and primary sources gave us more information",
                  option4:
                    "Text features such as illustrations and photographs showed readers what the people and things discussed in the text looked like",
                  answer: "4",
                },
                {
                  quiz: "What are labels and captions?",
                  option1:
                    "Labels identify the images, and captions may add information",
                  option2:
                    "Labels are parts of the images, and captions are parts of the text",
                  option3: "Labels and captions are parts of the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a suffix?",
                  option1: "It is a paragraph",
                  option2: "It is a long word",
                  option3: "It is a small word",
                  option4:
                    "It is a word part added to the end of a word to change its meaning",
                  answer: "4",
                },
                {
                  quiz: "What do you do with the inflectional ending -ed?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "2",
                },
                {
                  quiz: "What do you do with the inflectional ending -ing?",
                  option1: "We use it to make the simple present",
                  option2: "We use it to make the simple past",
                  option3: "We use it to make the simple future",
                  option4: "We use it to make the present progressive",
                  answer: "4",
                },
                {
                  quiz: "What is an appositive?",
                  option1:
                    "It is a pronoun that modifies the preceding adjective",
                  option2: "It is a verb that modifies the preceding noun",
                  option3:
                    "It is a noun or noun phrase or noun and verb that modify the preceding noun",
                  option4:
                    "It is a noun or noun phrase or noun and verb that modify the preceding verb",
                  answer: "3",
                },
                {
                  quiz: "How to write a good informative text?",
                  option1:
                    "Just make sure to start with a strong opening where you make a summary by stating the topic sentence",
                  option2:
                    "Start with a strong opening where you make a summary by stating the topic sentence, next use supporting details from text evidence, and finish with a strong conclusion through an exclamatory sentence.",
                  option3:
                    "Just make sure to use supporting details from text evidence throughout",
                  option4:
                    "Just make sure to finish with a strong conclusion through an exclamatory sentence",
                  answer: "2",
                },
              ],
            },
            {
              name: "June 6, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Patterns of Change",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can learning about different cultures teach us?",
                  option4: "Where can we find patterns in nature?",
                  answer: "4",
                },
                {
                  quiz: "What are the two kinds of Igneous Rocks we learned?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "Granite and Obsidian",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What patterns can we find in Igneous Rocks?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "Tessellations",
                  answer: "4",
                },
                {
                  quiz:
                    "What are the three kinds of Sedimentary Rocks we learned?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2: "Sandstone, Limestone, and Strata",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What patterns can we find in Sedimentary Rocks?",
                  option1: "Repetition of lines and layers",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is the first stage of The Rock Cycle?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "Sediment",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "Squeezing and cementing of sediment forms ...",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Sedimentary Rock",
                  answer: "4",
                },
              ],
            },
            {
              name: "June 13, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It said how Paul was excited about the vacation plan",
                  option2: "It said how Paul was packing for the travel",
                  option3: "It said how Paul was reluctant to travel",
                  option4:
                    "It said how Paul was telling his friends about his vacation plan",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It detailed how Paul's parents were reluctant to travel",
                  option2:
                    "It detailed how Paul expressed his anger toward the travel plan",
                  option3:
                    "It detailed how Paul's parents prepared to travel and how Paul discovered the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  option4:
                    "It detailed how Paul came to realize the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It talked about the food Uncle Art ordered for dinner and how Paul was attracted by it at first sight",
                  option2:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at first sight, but later came to like it",
                  option3:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at all",
                  option4:
                    "It talked about the food Uncle Art ordered for dinner and how Paul loved it and devoured it",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires",
                  option2:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires, and the music people loved to dance there compared to New York",
                  option3:
                    "It was about how Paul, his family, and relatives came to discover the music people loved to dance in Buenos Aires compared to New York",
                  option4:
                    "It was about how Paul, his family, and relatives couldn't discover the new sights, sounds, and languages spoken in Buenos Aires, including the music people loved to dance there",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family were scared",
                  option2:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned about the culture of soccer in Argentina",
                  option3:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family weren't impressed at all",
                  option4:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned nothing about the culture of soccer in Argentina",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It told how Paul found out that he loved soccer team colors and planned to paint his room in those colors",
                  option2:
                    "It told how Paul wanted to go back to New York as quick as possible",
                  option3:
                    "It told how Paul couldn't understand the culture of soccer in Argentina",
                  option4:
                    "It told how Paul loathed the culture of soccer in Argentina",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 20, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "Survivaland",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how four friends use their knowledge of nature to survive",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "2",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How can learning about nature be useful?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did the four friends used their knowledge of nature to get out of dangerous situations?",
                  option1:
                    "Latrice used her knowledge of sunrise to find the West direction, Raul used his knowledge about insects to get rid of the gigantic butterfly, and Juanita used her knowledge of crows to deviate the huge crow from them.",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you summarize a story?",
                  option1:
                    "By deciding which details are most important and retelling them in our own words",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz: "How do you decide which details are most important",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3:
                    "By asking yourself if they help you understand what is happening",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "Why do we summarize stories?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "To help us remember what we read",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the most important details about the outcome of Survivaland?",
                  option1:
                    "Sunrise helped find West direction, insects strangeness helped find how to fight the gigantic butterfly, and crows preferences were used to get rid of the huge hungry crow",
                  option2:
                    "The four friends went to Survivaland, they had fun, and they got out",
                  option3:
                    "The four friends went to Survivaland, they had fun, and they didn't make it back",
                  option4:
                    "The four friends went into the game, they had fun, and they got out",
                  answer: "1",
                },
                {
                  quiz: "What is the theme of a story?",
                  option1: "It is the last sentence of a story",
                  option2: "It is the first sentence of a story",
                  option3: "It is title of a story",
                  option4:
                    "It is the message about life that the author thinks is important",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a story?",
                  option1: "You can do that by thinking yourself",
                  option2:
                    "You can do that by thinking about what characters say and do, and what happens to them",
                  option3:
                    "You can do that by looking at the last sentence only",
                  option4: "You can do that by looking at the title only",
                  answer: "2",
                },
                {
                  quiz:
                    'What did the characters in "Survivaland" say and or do that help conclude to the theme of the story?',
                  option1:
                    "Paul's mom said that they were going to Argentina to visit Paul's uncle and aunt",
                  option2:
                    "Paul's uncle ordered Empanadas for dinner for them on their first night in Argentina",
                  option3:
                    "Latrice knows the sun rises in the east, so she figures out that west is in the opposite direction, Raul remembered insects taste with their feet so he asked Juanita to rub onions on herself to irritate and drive away the gigantic butterfly, and Juanita knew crows are attracted to shiny stuffs so she dumped her jewels in their opposite direction to get safe",
                  option4: "Paul's aunt said she wants to be multilingual",
                  answer: "3",
                },
                {
                  quiz:
                    'What happened to the characters in "Survivaland" that help conclude to the theme of the story?',
                  option1: "Paul's family was going to England",
                  option2:
                    "The characters run west to safety, the giant butterfly ran away, and the crow followed the jewels and left them",
                  option3: "Paul's family was going to France for vacation",
                  option4:
                    "Paul's family was going to Beijing to visit his aunt and uncle",
                  answer: "2",
                },
                {
                  quiz: "What was the theme of the story?",
                  option1: "There's always a way out!",
                  option2: "Do not judge a book by its cover",
                  option3: "Never read a book",
                  option4: "Do not open your book",
                  answer: "1",
                },
                {
                  quiz: "How did you know that text was fantasy?",
                  option1:
                    "The selection had a made-up setting, where the four friends suddenly traveled into the game, which is not possible in real life, and it included imaginary characters like the gigantic butterfly and the huge crow and events like when they rubbed their faces and suddenly came back to the normal world are things that do not exist in real life",
                  option2: "I just knew it",
                  option3: "My friend told me",
                  option4: "I guessed it",
                  answer: "1",
                },
                {
                  quiz: "What are other features of a fantasy text genre?",
                  option1:
                    "Where Paul says he wants to go to France sounds real and tells how he is attracted by French culture",
                  option2:
                    "Where Paul's dad is ordering the food while in Argentina sounds real and tells how he is a foodaholic",
                  option3:
                    "Where Paul's mom is talking about the birds in Argentina sounds real and tells how she is attracted by birds",
                  option4:
                    "May include sensory language and or personification",
                  answer: "4",
                },
                {
                  quiz: "What is sensory language?",
                  option1: "It is some text in the book",
                  option2: "It is what animals say",
                  option3:
                    "It is language that involves the five senses: touch, sight, taste, sound, smell",
                  option4: "all of the above",
                  answer: "3",
                },
                {
                  quiz: "What is personification?",
                  option1:
                    "Personification gives human qualities to objects or animals",
                  option2: "They are in the end",
                  option3: "They are in the middle",
                  option4: "They are in the beginning",
                  answer: "1",
                },
                {
                  quiz:
                    "Which one is an example of sensory language and personification that was found in the text?",
                  option1: "Immediately following a question mark",
                  option2:
                    "The phrase onion bitterness is sensory language, and the crow announcing he is hungry is personification",
                  option3: "After a period",
                  option4: "Look for the exclamation mark",
                  answer: "2",
                },
                {
                  quiz:
                    "Which COMPARISONS context clues in the text helped you figure out the meaning of the unfamiliar or multiple meaning word immobile on page 181 and what was that meaning?",
                  option1:
                    "The COMPARISONS suddenly sprang into action and raced across help figure out the meaning of immobile. It must mean the opposite, not moving",
                  option2:
                    "The COMPARISONS sun is rising and sets in the west help figure out the meaning of ascends. It must mean the opposite of sets, going up",
                  option3:
                    "The COMPARISONS fly down and land on help figure out the meaning of hovering. It must mean the opposite, remain in place in the air",
                  option4:
                    "The COMPARISONS huh? and confused help figure out the meaning of perplexed. It must mean the same, very confused",
                  answer: "1",
                },
              ],
            },
            {
              name: "June 27, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 4, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About what Paul discovers in Argentina and what he learns about himself",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3: "How do we investigate questions about nature?",
                  option4:
                    "What can learning about different cultures teach us?",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It said how Paul was excited about the vacation plan",
                  option2: "It said how Paul was packing for the travel",
                  option3: "It said how Paul was reluctant to travel",
                  option4:
                    "It said how Paul was telling his friends about his vacation plan",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 167 of Reading Writing Workshop?",
                  option1:
                    "It detailed how Paul's parents were reluctant to travel",
                  option2:
                    "It detailed how Paul expressed his anger toward the travel plan",
                  option3:
                    "It detailed how Paul's parents prepared to travel and how Paul discovered the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  option4:
                    "It detailed how Paul came to realize the similarity in outlines between his home and Buenos Aires during taking off and landing respectively",
                  answer: "3",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It talked about the food Uncle Art ordered for dinner and how Paul was attracted by it at first sight",
                  option2:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at first sight, but later came to like it",
                  option3:
                    "It talked about the food Uncle Art ordered for dinner and how Paul wasn't attracted by it at all",
                  option4:
                    "It talked about the food Uncle Art ordered for dinner and how Paul loved it and devoured it",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 168 of Reading Writing Workshop?",
                  option1:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires",
                  option2:
                    "It was about how Paul, his family, and relatives came to discover the new sights, sounds, and languages spoken in Buenos Aires, and the music people loved to dance there compared to New York",
                  option3:
                    "It was about how Paul, his family, and relatives came to discover the music people loved to dance in Buenos Aires compared to New York",
                  option4:
                    "It was about how Paul, his family, and relatives couldn't discover the new sights, sounds, and languages spoken in Buenos Aires, including the music people loved to dance there",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the first half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family were scared",
                  option2:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned about the culture of soccer in Argentina",
                  option3:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family weren't impressed at all",
                  option4:
                    "It narrated how while driving through the most unusual neighborhood in Buenos Aires, Paul and his family learned nothing about the culture of soccer in Argentina",
                  answer: "2",
                },
                {
                  quiz:
                    "How could you summarize the second half of the excerpt on page 169 of Reading Writing Workshop?",
                  option1:
                    "It told how Paul found out that he loved soccer team colors and planned to paint his room in those colors",
                  option2:
                    "It told how Paul wanted to go back to New York as quick as possible",
                  option3:
                    "It told how Paul couldn't understand the culture of soccer in Argentina",
                  option4:
                    "It told how Paul loathed the culture of soccer in Argentina",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 11, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was Unit 4 about?",
                  option1: "How do we explore plants?",
                  option2: "How do we go to school?",
                  option3: "How do we decide what is important?",
                  option4: "How do we ride a bike?",
                  answer: "3",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Praying",
                  option2: "Sharing Stories",
                  option3: "Dancing",
                  option4: "Learning to cook",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "What can we do to improve our reading",
                  option2: "What are the kinds of tales?",
                  option3:
                    "What kinds of stories do we tell and why do we tell them?",
                  option4: "What can we bring to a picnic",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn?",
                  option1: "8",
                  option2: "10",
                  option3: "12",
                  option4: "14",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story we read last class?",
                  option1: "Types of Rocks",
                  option2: "Plants and Nature",
                  option3: "How Mighty Kate Stopped the Train",
                  option4: "A devised plan",
                  answer: "3",
                },
                {
                  quiz: "What was the story about?",
                  option1: "About a girl collecting plants",
                  option2: "About four friends playing a game",
                  option3: "About a heroic young girl who saves the day",
                  option4: "About types of rocks",
                  answer: "3",
                },
                {
                  quiz: "How did the author tell the story?",
                  option1: "In a dull way",
                  option2: "In a fantastic way",
                  option3: "In an angry way",
                  option4: "In a rushed way",
                  answer: "2",
                },
                {
                  quiz: "Why did the author tell the story that way?",
                  option1: "To tell the reader what to do",
                  option2: "To catch the reader's attention",
                  option3: "To drive away the reader",
                  option4: "To make the story sound scary",
                  answer: "2",
                },
                {
                  quiz: "How did you know the story was a Tall Tale?",
                  option1: "It had a larger-than-life character, Kate",
                  option2:
                    "It described events that couldn't happen in real life such as the author said Kate's whistle traveled kilometers",
                  option3:
                    "It had humorous exaggeration and hyperbole where Kate yanked up workers in distress with one hand",
                  option4: "All of the above",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
              ],
            },
            {
              name: "July 18, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What patterns are found in sedimentary rocks?",
                  option1: "Limestone, Marble, and Sandstone",
                  option2: "Granite and Obsidian",
                  option3: "Blackstone, Whitestone and Cactus",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Where can we see the patterns found in sedimentary rocks?",
                  option1: "In the sky",
                  option2: "In deserts or sea and beaches or riverbanks",
                  option3: "In the house",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do rocks change?",
                  option1: "They move from one place to another",
                  option2: "They get transported by people",
                  option3:
                    "Water, wind, and temperature over long periods of time erode and change them, and even shape and sketch designs on them",
                  option4: "They turn into plants and other living things",
                  answer: "3",
                },
                {
                  quiz: "How are Igneous rocks formed?",
                  option1:
                    "They are formed after the wind blows trees down and those trees decay and accumulate to form Igneous rock.",
                  option2:
                    "They are formed after hard rocks get crushed by people as they walk on it and eventually split into Igneous rock.",
                  option3:
                    "They are formed after hot gas far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually turns into crystals of Igneous rock.",
                  option4:
                    "They are formed after hot liquid rock called magma or lava far below Earth's surface escapes to the surface through cracks such as mouths of volcanoes and eventually slowly cools to form crystals of Igneous rock.",
                  answer: "4",
                },
                {
                  quiz:
                    'What was the main idea of the section "Sedimentary Rocks" on page 196 of Reading Writing Workshop?',
                  option1: "Sedimentary rocks could be used as soccer balls",
                  option2: "Air will get compressed into sedimentary rocks",
                  option3:
                    "Particles such as sand or bones and shells form different sedimentary rocks",
                  option4: "Sedimentary rocks are extremely hard",
                  answer: "3",
                },
                {
                  quiz:
                    'What was the main idea of the section "Rock Formations" on page 196 of Reading Writing Workshop?',
                  option1: "Rock formations are so beautiful",
                  option2:
                    "Layers of sedimentary rock create different rock formations",
                  option3: "Rock formations are very rare and scarce",
                  option4:
                    "Soil particles accumulate in the air to create rock formations",
                  answer: "2",
                },
                {
                  quiz:
                    'How did you know the selection "Patterns of Change" was an expository text?',
                  option1:
                    "It provided evidence and gave reasons why patterns occur, supported them with facts and concrete details, and included diagrams that illustrated information",
                  option2:
                    "It had imaginary characters that couldn't exist in real life",
                  option3:
                    "The setting was all made-up and the events were too unrealistic",
                  option4: "It had hero with a set of tasks to accomplish",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "geo"?',
                  option1: "Earth",
                  option2: "Sun",
                  option3: "Moon",
                  option4: "Water",
                  answer: "1",
                },
                {
                  quiz: 'What is the meaning of the greek root "logy"?',
                  option1: "Eat",
                  option2: "Life",
                  option3: "Play",
                  option4: "Study",
                  answer: "4",
                },
                {
                  quiz: 'What is the meaning of the greek root "chrono"?',
                  option1: "Pet",
                  option2: "History",
                  option3: "Time",
                  option4: "Fast",
                  answer: "3",
                },
              ],
            },
            {
              name: "July 25, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 1, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "RESCUE",
                  option4: "What benefits come from people working as a group?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "8",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "How did people from other locations work together with those responders at the site of the Gulf oil spill?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz: "How do you understand confusing details of a text?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What skill do you use to summarize a text in order to understand it best?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "Main Idea and Key Details",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It gave facts about benefits of teamwork, included photographs, captions, and headings, and offered the author's conclusion in the end",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3: "Latin roots and context clues",
                  option4: "Paragraph clues",
                  answer: "3",
                },
                {
                  quiz: "What syllable type did we learn last class?",
                  option1: "Open syllable",
                  option2: "Consonant + le",
                  option3: "Closed syllable",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What kind of verbs did we learn last class?",
                  option1: "All verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "What do linking verbs do?",
                  option1: "Nothing",
                  option2: "They link the subject and a word in the predicate",
                  option3: "Help the main verb",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is a predicate noun?",
                  option1: "It's a word renaming or identifying the subject",
                  option2: "It's a common noun",
                  option3: "It's  proper noun",
                  option4: "It's long noun",
                  answer: "1",
                },
                {
                  quiz: "What is a predicate adjective?",
                  option1: "It's a word describing the subject",
                  option2: "It's a long adjective",
                  option3: "It's short adjective",
                  option4: "It's an adjective",
                  answer: "1",
                },
                {
                  quiz: "What first punctuating rules did we learn last class?",
                  option1: "How to punctuate a text",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate paragraphs",
                  option4: "How to punctuate titles of works",
                  answer: "4",
                },
                {
                  quiz:
                    "What second punctuating rules did we learn last class?",
                  option1: "How to punctuate a book",
                  option2: "How to punctuate letters",
                  option3: "How to punctuate product names",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you start an opinion essay?",
                  option1: "By focusing on the topic",
                  option2: "By focusing on the strong conclusion",
                  option3: "By focusing on all details",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What do you pay attention to in the body of an opinion essay?",
                  option1: "Introduction",
                  option2: "Sentence structure",
                  option3: "Conclusion",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you finish a good opinion essay?",
                  option1: "With a strong conclusion",
                  option2: "With no conclusion",
                  option3: "With so many unimportant details",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 8, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was Unit 4 about?",
                  option1: "How do we explore plants?",
                  option2: "How do we go to school?",
                  option3: "How do we decide what is important?",
                  option4: "How do we ride a bike?",
                  answer: "3",
                },
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Praying",
                  option2: "Sharing Stories",
                  option3: "Dancing",
                  option4: "Learning to cook",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "What can we do to improve our reading",
                  option2: "What are the kinds of tales?",
                  option3:
                    "What kinds of stories do we tell and why do we tell them?",
                  option4: "What can we bring to a picnic",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn?",
                  option1: "8",
                  option2: "10",
                  option3: "12",
                  option4: "14",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the story we read last class?",
                  option1: "Types of Rocks",
                  option2: "Plants and Nature",
                  option3: "How Mighty Kate Stopped the Train",
                  option4: "A devised plan",
                  answer: "3",
                },
                {
                  quiz: "What was the story about?",
                  option1: "About a girl collecting plants",
                  option2: "About four friends playing a game",
                  option3: "About a heroic young girl who saves the day",
                  option4: "About types of rocks",
                  answer: "3",
                },
                {
                  quiz: "How did the author tell the story?",
                  option1: "In a dull way",
                  option2: "In a fantastic way",
                  option3: "In an angry way",
                  option4: "In a rushed way",
                  answer: "2",
                },
                {
                  quiz: "Why did the author tell the story that way?",
                  option1: "To tell the reader what to do",
                  option2: "To catch the reader's attention",
                  option3: "To drive away the reader",
                  option4: "To make the story sound scary",
                  answer: "2",
                },
                {
                  quiz: "How did you know the story was a Tall Tale?",
                  option1: "It had a larger-than-life character, Kate",
                  option2:
                    "It described events that couldn't happen in real life such as the author said Kate's whistle traveled kilometers",
                  option3:
                    "It had humorous exaggeration and hyperbole where Kate yanked up workers in distress with one hand",
                  option4: "All of the above",
                  answer: "4",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 15, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4: "How to pronounce diphthongs",
                  answer: "3",
                },
                {
                  quiz: "What are pronouns?",
                  option1: "They are common nouns",
                  option2: "They are words that replace nouns",
                  option3: "They are nouns",
                  option4: "They are verbs",
                  answer: "2",
                },
                {
                  quiz: "What are antecedents?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are words that pronouns replace",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are indefinite pronouns?",
                  option1:
                    "They are pronouns that are in the middle of the sentence",
                  option2:
                    "They are pronouns that are in the end of the sentence",
                  option3:
                    "They are pronouns that are in the beginning of the sentence",
                  option4:
                    "They are pronouns that refer to something or someone not specific",
                  answer: "4",
                },
                {
                  quiz: "What is pronoun-antecedent agreement?",
                  option1: "They must match in gender only",
                  option2: "They must match in number only",
                  option3: "They must match in number and gender",
                  option4: "They must match in agreement",
                  answer: "3",
                },
                {
                  quiz:
                    "What kind of text did we practice to write last class?",
                  option1: "Poem",
                  option2: "Opinion essay",
                  option3: "Narrative text",
                  option4: "Informative text",
                  answer: "3",
                },
                {
                  quiz: "Which is a way to make a narrative text fun?",
                  option1: "Use formal voice",
                  option2: "Use informal voice",
                  option3: "Use transition words",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you describe scenes precisely?",
                  option1: "By using many words",
                  option2: "By using sensory details",
                  option3: "By using verbs",
                  option4: "By using nouns",
                  answer: "2",
                },
                {
                  quiz: "How do you reinforce ideas in a narrative text?",
                  option1: "By changing the style and tone",
                  option2: "By using more words",
                  option3: "By using sensory details",
                  option4: "By using figurative language",
                  answer: "4",
                },
                {
                  quiz: "What narrative text did we write last class?",
                  option1: "Where Kate whistled",
                  option2: "Where Kate tossed a boulder",
                  option3: "Where Kate wrung the wet log",
                  option4: "Where babe Kate picked up her doc",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 22, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4: "How to pronounce diphthongs",
                  answer: "3",
                },
                {
                  quiz: "What are pronouns?",
                  option1: "They are common nouns",
                  option2: "They are words that replace nouns",
                  option3: "They are nouns",
                  option4: "They are verbs",
                  answer: "2",
                },
                {
                  quiz: "What are antecedents?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are words that pronouns replace",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are indefinite pronouns?",
                  option1:
                    "They are pronouns that are in the middle of the sentence",
                  option2:
                    "They are pronouns that are in the end of the sentence",
                  option3:
                    "They are pronouns that are in the beginning of the sentence",
                  option4:
                    "They are pronouns that refer to something or someone not specific",
                  answer: "4",
                },
                {
                  quiz: "What is pronoun-antecedent agreement?",
                  option1: "They must match in gender only",
                  option2: "They must match in number only",
                  option3: "They must match in number and gender",
                  option4: "They must match in agreement",
                  answer: "3",
                },
                {
                  quiz:
                    "What kind of text did we practice to write last class?",
                  option1: "Poem",
                  option2: "Opinion essay",
                  option3: "Narrative text",
                  option4: "Informative text",
                  answer: "3",
                },
                {
                  quiz: "Which is a way to make a narrative text fun?",
                  option1: "Use formal voice",
                  option2: "Use informal voice",
                  option3: "Use transition words",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz: "How do you describe scenes precisely?",
                  option1: "By using many words",
                  option2: "By using sensory details",
                  option3: "By using verbs",
                  option4: "By using nouns",
                  answer: "2",
                },
                {
                  quiz: "How do you reinforce ideas in a narrative text?",
                  option1: "By changing the style and tone",
                  option2: "By using more words",
                  option3: "By using sensory details",
                  option4: "By using figurative language",
                  answer: "4",
                },
                {
                  quiz: "What narrative text did we write last class?",
                  option1: "Where Kate whistled",
                  option2: "Where Kate tossed a boulder",
                  option3: "Where Kate wrung the wet log",
                  option4: "Where babe Kate picked up her doc",
                  answer: "1",
                },
              ],
            },
            {
              name: "August 29, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Take Action",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3:
                    "What can people do to bring about a positive change?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "20",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About what Frederick Douglass did to bring about a positive change for African Americans",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "2",
                },
                {
                  quiz:
                    "What did Frederick Douglass do to bring about a positive change for African Americans?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "Some said it was a calculator and others said it was a language",
                  option4:
                    "Spoke against slavery, exposed the horrors of slavery, wrote a book, started his own abolitionist newspaper, and worked tirelessly to end segregation.",
                  answer: "4",
                },
                {
                  quiz: "What should summaries say?",
                  option1:
                    "By asking and answering questions about those details",
                  option2: "As you read and or in the end",
                  option3: "Only what is in the text",
                  option4: "Only in the end",
                  answer: "3",
                },
                {
                  quiz: "How do you find the author's point of view?",
                  option1:
                    "By finding the key details of each section of the text and summarizing what do they have in common",
                  option2: "To be happy",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "1",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It told facts about the life of Fredrick Douglass, described its talents and achievements, and was written in logical order",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between a prefix and a suffix?",
                  option1: "Homographs and context clues",
                  option2: "Only context clues",
                  option3:
                    "A prefix is a word part added to the beginning of another word to change its meaning, meanwhile a suffix is added to the end",
                  option4: "Paragraph clues",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 5, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What did we learn about homographs last class?",
                  option1: "They are spelled the same",
                  option2: "How they are written",
                  option3: "How they are spelled",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What else did we learn about homographs last class?",
                  option1: "To remember",
                  option2: "To laugh",
                  option3: "To play",
                  option4: "May sound the same or not",
                  answer: "4",
                },
                {
                  quiz:
                    "What was the last thing we learned about homographs last class?",
                  option1: "Differ in meaning",
                  option2: "Must be different words",
                  option3: "Have the same meaning",
                  option4: "Always sound the same",
                  answer: "1",
                },
                {
                  quiz: "How do pronouns and verbs agree?",
                  option1: "They never agree in any ways",
                  option2: "They don't need to agree",
                  option3: "They agree in number and gender",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz: "How do you form pronoun-verb contractions?",
                  option1:
                    "By putting a pronoun and verb together and using an apostrophe to replace the omitted letters",
                  option2:
                    "By putting a pronoun and verb together and leaving no letter out",
                  option3: "By replacing a pronoun with a verb together",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz: "Can you abbreviate state names on envelopes?",
                  option1: "Yes",
                  option2: "No",
                  option3: "Never",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods on abbreviations that are read like words?",
                  option1: "No",
                  option2: "Yes",
                  option3: "Always",
                  option4: "Sometimes",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you use periods with abbreviations of measure units in the metric system?",
                  option1: "No",
                  option2: "Sometimes",
                  option3: "Yes",
                  option4: "Always",
                  answer: "1",
                },
                {
                  quiz:
                    "Can you double the period at the end of a sentence ending with an abbreviation?",
                  option1: "No",
                  option2: "Always",
                  option3: "Sometimes",
                  option4: "Yes",
                  answer: "1",
                },
                {
                  quiz: "How do you write a good informative text?",
                  option1: "Use repetition, rhyme, and stanzas",
                  option2:
                    "Use figurative language, informal voice, and dialogue",
                  option3:
                    "Develop the topic, use logical order text structure, and finish with a strong conclusion",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 12, 2020",
              questions: 20,
              time: 360,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Teamwork",
                  option2: "Into the Past",
                  option3: "Realistic Fiction",
                  option4: "Consider Our Resources",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do we explain what happened in the past?",
                  option2: "a Reluctant TRAVELER",
                  option3: "Why are natural resources valuable?",
                  option4: "What benefits come from people working as a group?",
                  answer: "3",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "9",
                  option3: "14",
                  option4: "8",
                  answer: "3",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About two different views about the uses of a mysterious object",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About how a variety of people worked together after the Deepwater Horizon oil spill in the Gulf of Mexico",
                  option4: "About the ways natural resources provide energy?",
                  answer: "1",
                },
                {
                  quiz: "How are natural resources valuable?",
                  option1:
                    "Bankers and insurance helped find ways to make up for the lost income from seafood sales",
                  option2: "They searched in the book to find solutions",
                  option3:
                    "The sun helps heat our planet, coal is burned to heat our homes, and oil is transformed into gasoline to power our cars",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "3",
                },
                {
                  quiz:
                    "What ways did the text suggest that individuals can save energy?",
                  option1:
                    "By asking and answering questions about those details",
                  option2:
                    "Turning off lights, TVs, computers, and other devices when they are not using them",
                  option3: "Only as you read",
                  option4: "Only in the end",
                  answer: "2",
                },
                {
                  quiz:
                    "What are some of the things you said you could do personally to save energy?",
                  option1: "To help us read well",
                  option2: "Use less appliances",
                  option3:
                    "The first author agreed quipus were calculators, and the second author was more for quipus were a form of language",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Expository text",
                  option4: "Persuasive Article",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to use details, reasons, and evidence to persuade me to agree with its conclusion",
                  option2: "It had imaginary characters",
                  option3:
                    "It explained why natural resources are valuable, presented information in logical order, and presented them in a chart",
                  option4: "It had unreal events",
                  answer: "3",
                },
                {
                  quiz: "What word study strategy did we learn last class?",
                  option1: "Homographs and context clues",
                  option2:
                    "Surrounding definition and restatement context clues",
                  option3: "Same sentence context clues",
                  option4: "Paragraph clues",
                  answer: "2",
                },
                {
                  quiz: "What sound did we learn to read last class?",
                  option1: "Open syllable",
                  option2: "r-controlled vowel syllables",
                  option3: "Closed syllable",
                  option4:
                    "The sound of the letters ture, cher, tcher, and zure",
                  answer: "4",
                },
                {
                  quiz: "What kind of pronouns did we learn last class?",
                  option1: "Irregular verbs",
                  option2: "Helping verbs",
                  option3: "Linking verbs",
                  option4: "Possessive pronouns and reflexive pronouns",
                  answer: "1",
                },
                {
                  quiz: "What did we say about apostrophes?",
                  option1:
                    "They are used in dialogues, making the possessive, and contractions",
                  option2: "They link the subject and a word in the predicate",
                  option3: "They help the main verb",
                  option4:
                    "They do not end in -ed to form the past tense and have special spellings when used with have in the perfect or progressive tenses",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about summarizing a text?",
                  option1: "Have ride",
                  option2:
                    "We said we use the most important ideas from the text and do not include our own opinions",
                  option3: "Have ridden",
                  option4: "Have rid",
                  answer: "3",
                },
                {
                  quiz:
                    "What did we learn about how to find the author's point of view?",
                  option1: "Pay attention to the words that the author chose",
                  option2: "Have take",
                  option3: "Have took",
                  option4: "Have taked",
                  answer: "1",
                },
                {
                  quiz: "What did we learn about writing an opinion essay?",
                  option1: "Have be",
                  option2:
                    "It should start with a strong opening, provide reasons and evidence, and use transitions",
                  option3: "Have is",
                  option4: "Have was",
                  answer: "2",
                },
                {
                  quiz: "Which of the following are reflexive pronouns?",
                  option1: "Him, her, and them",
                  option2: "He, she, and it",
                  option3: "Myself, hisself, and yourself",
                  option4: "All of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come before the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "Hers and his",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following possessive pronouns come after the verb?",
                  option1: "My and your",
                  option2: "I and you",
                  option3: "Mine and yours",
                  option4: "We and they",
                  answer: "3",
                },
                {
                  quiz: "What is the use of a chart?",
                  option1:
                    "Use precise language, use transitions, and include reasons and evidence",
                  option2: "Write many conclusions",
                  option3:
                    "It represents facts visually to allow readers to compare and contrast information",
                  option4: "None of the above",
                  answer: "3",
                },
              ],
            },
            {
              name: "September 19, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Patterns of Change",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About how Lucy Braun's classification of plants continues to help scientists today",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What can learning about different cultures teach us?",
                  option4: "Where can we find patterns in nature?",
                  answer: "4",
                },
                {
                  quiz: "What are the two kinds of Igneous Rocks we learned?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "Granite and Obsidian",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What patterns can we find in Igneous Rocks?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "Tessellations",
                  answer: "4",
                },
                {
                  quiz:
                    "What are the three kinds of Sedimentary Rocks we learned?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2: "Sandstone, Limestone, and Strata",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What patterns can we find in Sedimentary Rocks?",
                  option1: "Repetition of lines and layers",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is the first stage of The Rock Cycle?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "Sediment",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "Squeezing and cementing of sediment forms ...",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Sedimentary Rock",
                  answer: "4",
                },
              ],
            },
            {
              name: "September 26, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Making It Happen",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "2",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3: "How do you prepare for a picnic?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "4",
                },
                {
                  quiz: "What is a lyric poetry?",
                  option1: "It is a poem that contains rhyme and alliteration",
                  option2: "It is a short poem",
                  option3: "It is a poem that tells a story",
                  option4: "It is a long poem",
                  answer: "1",
                },
                {
                  quiz: "What is a free verse?",
                  option1: "It is a poem that tells a story",
                  option2: "It is a long poem",
                  option3: "It is a short poem",
                  option4:
                    "It is a poem that has no rhyming pattern, meter or line length",
                  answer: "4",
                },
                {
                  quiz: "How do you find the theme of a poem?",
                  option1:
                    "It is the repeated use of words, sounds or phrases for effect or emphasis",
                  option2: "It is the repeated use of punctuations",
                  option3: "By identifying poetic elements and key details",
                  option4: "It is the repeated use of the same title",
                  answer: "3",
                },
                {
                  quiz: "What is rhyme in poetry?",
                  option1: "It is the repetition of the same consonant sound",
                  option2: "It is the repetition of the same vowel sound",
                  option3: "It is the repetition of the same word",
                  option4: "It is the repetition of the same letter",
                  answer: "2",
                },
                {
                  quiz: "What is alliteration?",
                  option1:
                    "They're words that are spelled the same and have the same meaning",
                  option2:
                    "It is the presence of the same consonant sound in the beginning of two or more words",
                  option3:
                    "They're words that are spelled the same but have different meanings and may or may not have the same pronunciation",
                  option4:
                    "They're words that are not spelled the same but have the same meaning",
                  answer: "2",
                },
                {
                  quiz: "What is meter in poetry?",
                  option1:
                    "It is the rhythm or regular pattern of sounds in a line",
                  option2: "It's the same as its denotation",
                  option3: "Guess it from its letters",
                  option4: "Use context clues to figure out the meaning",
                  answer: "1",
                },
                {
                  quiz: "What is stanza in poetry?",
                  option1: "Foreshadowing and Imagery",
                  option2: "Effect and Emphasis",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What is the difference between simile and metaphor?",
                  option1: "In unity there's strength",
                  option2: "It takes two to tango",
                  option3: "Hope is the source of life",
                  option4:
                    "Simile uses words like or as to make a comparison, but metaphor makes a comparison without them",
                  answer: "4",
                },
              ],
            },
            {
              name: "October 17, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "How Good is History ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "How do you express something that is important to you?",
                  answer: "3",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "16",
                  answer: "1",
                },
                {
                  quiz: "How is making predictions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us read with purpose",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast characters.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is realistic fiction?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it features events and settings typical of the time period in which the story is set",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is an idiom?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is an expression that cannot be defined by the words in it",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3:
                    "They are words that sound the same, but are spelled differently and have different meaning",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What is a dependent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an independent clause?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "It is a sentence fragment that cannot stand alone as a sentence and begins with a subordination conjunction",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "October 24, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "4",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "3",
                },
                {
                  quiz: "How did Miguel change after entering Middle School?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What caused him to change?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "He became friend with Jake",
                  answer: "4",
                },
                {
                  quiz:
                    "How can making predictions help us better understand the text?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What can you compare and contrast in a story?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is Realistic Fiction?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3:
                    "It is where characters and settings may actually exist in real life",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "What context clues did we talk about in the class?",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Comparisons",
                  answer: "4",
                },
              ],
            },
            {
              name: "October 31, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "A Simple Plan",
                  answer: "2",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About patterns you can find in rocks and rock formations",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "4",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "When has a plan helped you accomplish a task?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "3",
                },
                {
                  quiz: "How did Miguel change after entering Middle School?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4: "Yellowstone and marble",
                  answer: "3",
                },
                {
                  quiz: "What caused him to change?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Spirals",
                  option4: "He became friend with Jake",
                  answer: "4",
                },
                {
                  quiz:
                    "How can making predictions help us better understand the text?",
                  option1: "Granite, Obsidian, and Yellowstone",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "2",
                },
                {
                  quiz: "What can you compare and contrast in a story?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3: "Repetition of doors and windows",
                  option4: "Repetition of shoes and cars",
                  answer: "1",
                },
                {
                  quiz: "What is Realistic Fiction?",
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3:
                    "It is where characters and settings may actually exist in real life",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: "What context clues did we talk about in the class?",
                  option1: "Metamorphic Rock",
                  option2: "Sediment",
                  option3: "Igneous Rock",
                  option4: "Comparisons",
                  answer: "4",
                },
              ],
            },
            {
              name: "November 7, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce the suffixes less, ist, ion, and ful, and how to use their meaning to infer unfamiliar words based of them",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix less?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the suffix ist?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means person who studies",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the suffix ion?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means the act of",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix ful?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means full of",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What did we learn under grammar last class?",
                  option1: "Adjectives",
                  option2: "Present tense verbs",
                  option3: "Pronouns",
                  option4:
                    "Independent and dependent clauses, and appositives and commas",
                  answer: "4",
                },
                {
                  quiz:
                    "What is the difference between an independent clause and a dependent clause?",
                  option1:
                    "The former has many words but the latter has few words",
                  option2:
                    "The former can stand on its own meanwhile the latter cannot",
                  option3: "The former is a clause but the other is not",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "What is the relationship between appositives and commas?",
                  option1:
                    "Commas appear before and immediately after appositives",
                  option2: "Commas only appear before appositives",
                  option3: "Commas only appear after appositives",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing opening linking word?",
                  option1: "As you can see",
                  option2: "Lastly",
                  option3: "First",
                  option4: "I believe",
                  answer: "4",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing closing linking word?",
                  option1: "As you can see",
                  option2: "Third",
                  option3: "Also",
                  option4: "The next",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 14, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonic skills did we learn last class?",
                  option1: "How to pronounce short vowels",
                  option2: "How to pronounce long vowels",
                  option3:
                    "How to pronounce unaccented final schwa l and n sounds",
                  option4:
                    "How to pronounce the suffixes less, ist, ion, and ful, and how to use their meaning to infer unfamiliar words based of them",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix less?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means above",
                  answer: "2",
                },
                {
                  quiz: "What is the meaning of the suffix ist?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means person who studies",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the suffix ion?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means all",
                  option4: "It means the act of",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the suffix ful?",
                  option1: "It means together",
                  option2: "It means without",
                  option3: "It means full of",
                  option4: "It means above",
                  answer: "3",
                },
                {
                  quiz: "What did we learn under grammar last class?",
                  option1: "Adjectives",
                  option2: "Present tense verbs",
                  option3: "Pronouns",
                  option4:
                    "Independent and dependent clauses, and appositives and commas",
                  answer: "4",
                },
                {
                  quiz:
                    "What is the difference between an independent clause and a dependent clause?",
                  option1:
                    "The former has many words but the latter has few words",
                  option2:
                    "The former can stand on its own meanwhile the latter cannot",
                  option3: "The former is a clause but the other is not",
                  option4: "All of the above",
                  answer: "2",
                },
                {
                  quiz:
                    "What is the relationship between appositives and commas?",
                  option1:
                    "Commas appear before and immediately after appositives",
                  option2: "Commas only appear before appositives",
                  option3: "Commas only appear after appositives",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing opening linking word?",
                  option1: "As you can see",
                  option2: "Lastly",
                  option3: "First",
                  option4: "I believe",
                  answer: "4",
                },
                {
                  quiz:
                    "Which of the following is an opinion writing closing linking word?",
                  option1: "As you can see",
                  option2: "Third",
                  option3: "Also",
                  option4: "The next",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 21, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Our Changing Earth",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4:
                    "What changes in the environment affect living things?",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "4",
                },
                {
                  quiz:
                    "How is asking and answering questions while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz: "What can we compare and contrast in a text?",
                  option1: "We can compare and contrast phonics",
                  option2: "We can compare and contrast grammar",
                  option3: "We can compare and contrast ideas.",
                  option4: "We can compare and contrast letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is expository text?",
                  option1: "If it has a lot of sections.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "2",
                },
                {
                  quiz: "What is a graph?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3: "It is an expression means what it says",
                  option4: "It is an expression that has no meaning",
                  answer: "2",
                },
                {
                  quiz: "What are photographs?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4: "They are words that verbs replace",
                  answer: "3",
                },
                {
                  quiz: "What are captions?",
                  option1:
                    "It is a sentence fragment that can stand alone as a sentence",
                  option2:
                    "They are words that add information to a photograph",
                  option3: "It is a group of lines expressing a key idea",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: 'What is the meaning of the prefix "dis"?',
                  option1: "It means not or absence of or opposite of",
                  option2: "It means before",
                  option3: "It means wrong",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "November 28, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text we read?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "CHANGING VIEWS OF EARTH",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About how our understanding of Earth has changed along with scientific developments over time",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "How can scientific knowledge change over time?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz:
                    "What was the effect of flight on our knowledge about Earth?",
                  option1: "Strata and Rock",
                  option2: "Sandstone and Limestone",
                  option3: "He had a new perspective on math",
                  option4:
                    "Permitted to launch satellites in space to achieve new breakthroughs",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Helps stay focused",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you call cause and effect events where the effect of the previous event is the cause of the current one?",
                  option1: "Cause-Effect Chain",
                  option2:
                    "Because of the use of details to help think about what might happen next",
                  option3: "marble, Jewel, and Rock",
                  option4: "Stone, Bone and Cone",
                  answer: "1",
                },
                {
                  quiz: "What is a diagram?",
                  option1: "Effects of different settings on characters",
                  option2: "Repetition of colors and behaviors",
                  option3:
                    "It’s a drawing that shows the different parts of something and how they relate to each other",
                  option4: "Repetition of shoes and cars",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "geo"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Earth",
                  option4: "Igneous Rock",
                  answer: "3",
                },
                {
                  quiz: 'What is the meaning of the Greek Root "helio"?',
                  option1: "Metamorphic Rock",
                  option2: "Sedimentary Rock",
                  option3: "About Sun",
                  option4: "Igneous Rock",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 5, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Scientific Viewpoints",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "What benefits come from people working as a group?",
                  option4:
                    "How do natural events and human activities affect the environment?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "11",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About two different views on the arrival of new species into the U.S.",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "What where the uses of species introduced in the U.S.?",
                  option1:
                    "Some like horses were used for work, transportation, and recreation",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz:
                    "What where the harmful effects of species introduced in the U.S.?",
                  option1:
                    "Some like the Med. Fruit Fly destroyed native plants like citrus.",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What did we say about how you make sure to understand a persuasive article last class?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "By asking and answering questions",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What skill did we learn that you can use to understand a persuasive article last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Author's Point of View",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to persuade me to agree with the author's viewpoint with some evidence and a chart",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Biography",
                  option3: "Persuasive Article ",
                  option4: "Expository Text",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 12, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Scientific Viewpoints",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "Getting from Here to There",
                  option2: "a Reluctant TRAVELER",
                  option3: "What benefits come from people working as a group?",
                  option4:
                    "How do natural events and human activities affect the environment?",
                  answer: "4",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "4",
                  option2: "11",
                  option3: "5",
                  option4: "9",
                  answer: "2",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1: "About what motivates you to accomplish a goal?",
                  option2:
                    "About when has a plan helped you accomplish a task?",
                  option3:
                    "About two different views on the arrival of new species into the U.S.",
                  option4:
                    "About what can learning about different cultures teach us?",
                  answer: "3",
                },
                {
                  quiz:
                    "What where the uses of species introduced in the U.S.?",
                  option1:
                    "Some like horses were used for work, transportation, and recreation",
                  option2: "They searched in the book to find solutions",
                  option3: "They listened to the radio for information",
                  option4: "They used their knowledge about storms to get safe",
                  answer: "1",
                },
                {
                  quiz:
                    "What where the harmful effects of species introduced in the U.S.?",
                  option1:
                    "Some like the Med. Fruit Fly destroyed native plants like citrus.",
                  option2: "By telling the important details",
                  option3: "By retelling it",
                  option4: "By dictating it",
                  answer: "1",
                },
                {
                  quiz:
                    "What did we say about how you make sure to understand a persuasive article last class?",
                  option1: "To help us read well",
                  option2: "To be happy",
                  option3: "By asking and answering questions",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz:
                    "What skill did we learn that you can use to understand a persuasive article last class?",
                  option1: "Biography ",
                  option2: "Fair Tale",
                  option3: "Author's Point of View",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: "What helped you find out the text genre?",
                  option1:
                    "It tried to persuade me to agree with the author's viewpoint with some evidence and a chart",
                  option2: "It had imaginary characters",
                  option3: "It had a made-up setting",
                  option4: "It had unreal events",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Fantasy",
                  option2: "Biography",
                  option3: "Persuasive Article ",
                  option4: "Expository Text",
                  answer: "3",
                },
              ],
            },
            {
              name: "December 19, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of last class?",
                  option1: "Better Together",
                  option2: "Express Yourself",
                  option3: "Science is the Future",
                  option4: "Joining forces",
                  answer: "4",
                },
                {
                  quiz: "What was the essential question of last class?",
                  option1: "How do you achieve your dreams?",
                  option2: "What motivates you to accomplish a goal?",
                  option3:
                    "How do shared experiences help people adapt to change?",
                  option4: "How do different groups contribute to a cause?",
                  answer: "4",
                },
                {
                  quiz: "How many vocabulary did we learn?",
                  option1: "19",
                  option2: "18",
                  option3: "17",
                  option4: "15",
                  answer: "2",
                },
                {
                  quiz: "How is summarizing while reading important?",
                  option1: "It makes reading funny",
                  option2: "It makes reading interesting",
                  option3: "It confuses us",
                  option4: "It helps us understand what we read",
                  answer: "4",
                },
                {
                  quiz:
                    "How could you find the theme of stories like the one we read last class?",
                  option1: "By comparing and contrasting phonics",
                  option2: "By comparing and contrasting grammar",
                  option3:
                    "By paying attention to what the characters do and say and what happens to them.",
                  option4: "By comparing and contrasting letters",
                  answer: "3",
                },
                {
                  quiz: "How will you know a text is historical fiction?",
                  option1:
                    "If it features events and settings typical of the period in which the story is set.",
                  option2:
                    "If it gives information about a topic and develops that topic with facts, graphs, and photographs",
                  option3: "If it has many characters",
                  option4: "If it is written in the past",
                  answer: "1",
                },
                {
                  quiz: "What is a Flashback?",
                  option1: "It is an expression that is simple",
                  option2:
                    "It is a diagram that shows numerical information, including changes overtime",
                  option3:
                    "It is a description of events and actions that occurred before the main action of the story",
                  option4: "It is an expression that has no meaning",
                  answer: "3",
                },
                {
                  quiz: "What are homophones?",
                  option1: "They are words that adverbs replace",
                  option2: "They are words that adjectives replace",
                  option3: "They are pictures that provide visual information",
                  option4:
                    "They are words that sound the same but are spelled differently and have different meanings",
                  answer: "4",
                },
                {
                  quiz: "What part of speech are words with the -ion suffix?",
                  option1: "Verbs",
                  option2: "Nouns",
                  option3: "Adjectives",
                  option4: "None of the above",
                  answer: "2",
                },
                {
                  quiz: "What is an Adverb?",
                  option1: "It is a word that tells more about the verb",
                  option2: "It is an adjective",
                  option3: "It is a different verb",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "December 26, 2020",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What were the 3 features we learned a good narrative text should have last class?",
                  option1:
                    "Sequence, Develop Character and Figurative Language",
                  option2:
                    "Cause-Effect Chain, Author's point of view and Main Idea",
                  option3: "Similarities, Differences and Definitions",
                  option4: "Drama, Expository and Informational",
                  answer: "1",
                },
                {
                  quiz: "What was the text we wrote last class about?",
                  option1:
                    "About Libby's reaction to her father's comment on her poem in a letter addressed to her",
                  option2:
                    "About Libby's reaction to her brother's comment on her poem in a letter addressed to her",
                  option3:
                    "About Libby's reaction to her sister's comment on her poem in a letter addressed to her",
                  option4:
                    "About Libby's reaction to her friend's comment on her poem in a letter addressed to her",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the weekly concept of the new lesson last class?",
                  option1: "Getting Along",
                  option2: "Praying Together",
                  option3: "Helping Each Other",
                  option4: "Eating Together",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the essential question of the new lesson last class?",
                  option1: "What actions can we take to get along with others?",
                  option2: "What actions can we take to pray together?",
                  option3: "What actions can we take to help each other?",
                  option4: "What actions can we take to eat together?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "16",
                  option2: "14",
                  option3: "12",
                  option4: "8",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "The Bully",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3: "About how one student tries to deal with a bully",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "How did Ramon's advice affected Michael's problem with J.T.?",
                  option1: "It helped him kick J.T.",
                  option2:
                    "It helped him solve his feud with J.T. and they eventually became friends",
                  option3: "It helped him punch J.T.",
                  option4: "It helped him yell at J.T.",
                  answer: "2",
                },
                {
                  quiz:
                    "What advice would you give to someone being bullied and why?",
                  option1:
                    "Tell that person to report to his or her parents for protection",
                  option2: "Ask that person to cry out for relief",
                  option3: "Ask that person to fight back to gain respect",
                  option4:
                    "Report to the teacher for he or she can counsel both",
                  answer: "4",
                },
              ],
            },
            {
              name: "January 2, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What were the 3 features we learned a good narrative text should have last class?",
                  option1:
                    "Sequence, Develop Character and Figurative Language",
                  option2:
                    "Cause-Effect Chain, Author's point of view and Main Idea",
                  option3: "Similarities, Differences and Definitions",
                  option4: "Drama, Expository and Informational",
                  answer: "1",
                },
                {
                  quiz: "What was the text we wrote last class about?",
                  option1:
                    "About Libby's reaction to her father's comment on her poem in a letter addressed to her",
                  option2:
                    "About Libby's reaction to her brother's comment on her poem in a letter addressed to her",
                  option3:
                    "About Libby's reaction to her sister's comment on her poem in a letter addressed to her",
                  option4:
                    "About Libby's reaction to her friend's comment on her poem in a letter addressed to her",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the weekly concept of the new lesson last class?",
                  option1: "Getting Along",
                  option2: "Praying Together",
                  option3: "Helping Each Other",
                  option4: "Eating Together",
                  answer: "1",
                },
                {
                  quiz:
                    "What was the essential question of the new lesson last class?",
                  option1: "What actions can we take to get along with others?",
                  option2: "What actions can we take to pray together?",
                  option3: "What actions can we take to help each other?",
                  option4: "What actions can we take to eat together?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn last class?",
                  option1: "16",
                  option2: "14",
                  option3: "12",
                  option4: "8",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text we read last class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "3",
                },
                {
                  quiz: "What was the title of the text we read last class?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "The Bully",
                  answer: "4",
                },
                {
                  quiz: "What was the text we read last class about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3: "About how one student tries to deal with a bully",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "How did Ramon's advice affected Michael's problem with J.T.?",
                  option1: "It helped him kick J.T.",
                  option2:
                    "It helped him solve his feud with J.T. and they eventually became friends",
                  option3: "It helped him punch J.T.",
                  option4: "It helped him yell at J.T.",
                  answer: "2",
                },
                {
                  quiz:
                    "What advice would you give to someone being bullied and why?",
                  option1:
                    "Tell that person to report to his or her parents for protection",
                  option2: "Ask that person to cry out for relief",
                  option3: "Ask that person to fight back to gain respect",
                  option4:
                    "Report to the teacher for he or she can counsel both",
                  answer: "4",
                },
              ],
            },
            {
              name: "January 9, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "RESCUE",
                  option4: "Mysterious Oceans",
                  answer: "4",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how Ping follows a plan to find a lost brocade",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "3",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2:
                    "How are living things adapted to their environment?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "What was a way sea creatures adapt to the deep ocean?",
                  option1: "By singing",
                  option2: "Through playing",
                  option3: "By sleeping",
                  option4: "Actively forage for food",
                  answer: "4",
                },
                {
                  quiz:
                    "How does asking and answering questions about a text while reading help?",
                  option1: "Trees",
                  option2: "Waves",
                  option3: "Help check our understanding of complex ideas",
                  option4: "He became friend with Jake",
                  answer: "3",
                },
                {
                  quiz:
                    "How do you figure out cause and effect relationships in a text?",
                  option1: 'By looking for cues such as "because of" ',
                  option2: "By closing the book",
                  option3: "By rewriting the text",
                  option4: "All of the above",
                  answer: "1",
                },
                {
                  quiz: "What is a map?",
                  option1: "It's a photo",
                  option2: "it's a picture",
                  option3: "It’s the flat picture of an area",
                  option4: "None of the above",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "dormant"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Running",
                  answer: "3",
                },
                {
                  quiz: 'What was the meaning of the word "agile"?',
                  option1: "Playing",
                  option2: "Dead",
                  option3: "Temporarily inactive or inoperative",
                  option4: "Move quickly and easily",
                  answer: "4",
                },
              ],
            },
            {
              name: "January 16, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What phonics skill did we practice in this class?",
                  option1: "Syllabication",
                  option2: "Inflectional Endings",
                  option3: "Rhymes",
                  option4: "Words from Mythology",
                  answer: "4",
                },
                {
                  quiz: "Where did the meaning of the word Fortune come from?",
                  option1: "From Janus Roman god of beginnings",
                  option2:
                    "From Atlas Greek giant who supported the world on his shoulders",
                  option3: "From Luna Roman goddess of the moon",
                  option4: "From Fortuna Roman goddess of luck",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar skill did we learn and practice in this class?",
                  option1: "Homophones",
                  option2: "Negatives and Negative Contractions",
                  option3: "Antonyms",
                  option4: "Plurals",
                  answer: "2",
                },
                {
                  quiz: "What did we say were Negatives?",
                  option1: "Negatives are words that mean yes",
                  option2: "Negatives are words that mean happy",
                  option3: "Negatives are words that mean run",
                  option4: "Negatives are words that mean no",
                  answer: "4",
                },
                {
                  quiz:
                    "What grammar usage did we learn and practice in this class?",
                  option1: "Capitalization in emails",
                  option2: "Capitalization in letters",
                  option3: "How to correct Double Negatives",
                  option4: "How to use plurals",
                  answer: "3",
                },
                {
                  quiz: "What did we say was double negative?",
                  option1: "When there are two negatives in the same clause.",
                  option2: "When there are three negatives in the same clause.",
                  option3: "When there are no negatives in the same clause.",
                  option4: "When there are four negatives in the same clause.",
                  answer: "1",
                },
                {
                  quiz: "What is one way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By changing 1 negative to a positive",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What is another way to correct double negatives?",
                  option1: "By adding another negative",
                  option2: "By doing nothing",
                  option3: "By eliminating one of the negative words",
                  option4: "By changing all negatives to positives",
                  answer: "3",
                },
                {
                  quiz: "What type of essay did we learn in this class?",
                  option1: "Dialogue",
                  option2: "Informative Text",
                  option3: "Opinon Essay",
                  option4: "Realistic Fiction",
                  answer: "2",
                },
                {
                  quiz:
                    "What were the 3 key points we practiced during the writing?",
                  option1:
                    "Develop a Topic, Use good Sentence Structures, and a Strong Conclusion",
                  option2: "Use Figurative Language only",
                  option3: "pay attention to verbs",
                  option4: "None of the above",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 23, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this class?",
                  option1: "Making a Difference",
                  option2: "Working Hard",
                  option3: "Prayers",
                  option4: "Bravery",
                  answer: "1",
                },
                {
                  quiz:
                    "What essential question did the lesson want us to ask ourself?",
                  option1: "What motivates you to accomplish a goal?",
                  option2: "What impact do our actions have on our world?",
                  option3:
                    "What experiences can change the way you see yourself and the world around you?",
                  option4: "Where can we find patterns in nature?",
                  answer: "2",
                },
                {
                  quiz: "How many vocabulary did we learn in this class?",
                  option1: "12",
                  option2: "11",
                  option3: "10",
                  option4: "9",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text in this class?",
                  option1: "Expository Text",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "4",
                },
                {
                  quiz: "What was the title of the text?",
                  option1: "Getting from Here to There",
                  option2: "Miguel in the Middle",
                  option3: "Words to Save the World",
                  option4: "Mysterious Oceans",
                  answer: "3",
                },
                {
                  quiz: "What was the text about?",
                  option1:
                    "About how two poets describe unusual goals and why they matter",
                  option2:
                    "About how the biologist Rachel Carson used the power of writing to change the world",
                  option3:
                    "About the adaptation of sea creatures to the deep ocean",
                  option4:
                    "About what causes the title character to change his view of himself",
                  answer: "2",
                },
                {
                  quiz:
                    "What impact did the publication of Silent Spring have on the makers of pesticides such as DDT?",
                  option1: "It made them struggle to counter Rachel's claims",
                  option2: "It made them cry",
                  option3: "It made them make more money",
                  option4: "It made them close their companies",
                  answer: "1",
                },
                {
                  quiz: "When to ask and answer questions about a text?",
                  option1: "During reading only",
                  option2: "After reading only",
                  option3: "Before, during, and after reading",
                  option4: "Only before reading",
                  answer: "3",
                },
                {
                  quiz: "Why did Rachel write about pesticide abuse?",
                  option1: "Because their friend reported its harm",
                  option2: "Because their friend said how good they were",
                  option3: "Because their friend didn't like it",
                  option4: "None of the above",
                  answer: "1",
                },
                {
                  quiz:
                    "What comprehension skill did we practice in this lesson?",
                  option1: "Problem and solution",
                  option2: "Antonyms",
                  option3: "Synonyms",
                  option4: "Paragraphs",
                  answer: "1",
                },
              ],
            },
            {
              name: "January 30, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz:
                    "What special feature of a biography did we learn and practice in this class?",
                  option1: "Illustrations",
                  option2: "Maps",
                  option3: "Graphs",
                  option4: "Maps",
                  answer: "1",
                },
                {
                  quiz:
                    "What 3 details helped us understand the subject of the biography we read in this lesson?",
                  option1:
                    "The illustration on page 425, that on page 426, and the one on page 427",
                  option2:
                    "The illustration on page 420, that on page 421, and the one on page 422",
                  option3:
                    "The map on page 425, that on page 426, and the one on page 427",
                  option4:
                    "The graph on page 425, that on page 426, and the one on page 427",
                  answer: "1",
                },
                {
                  quiz:
                    "What vocabulary strategy did we learn to use to find the meaning of unfamiliar words in this class?",
                  option1: "Synonyms and Antonyms",
                  option2: "Comparisons",
                  option3: "Cause and Effect",
                  option4: "Figurative Language",
                  answer: "1",
                },
                {
                  quiz: "What are synonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "1",
                },
                {
                  quiz: "What are antonyms?",
                  option1:
                    "They're words that have the same, or almost the same, meaning",
                  option2:
                    "They're words that have the opposite, or nearly the opposite, meaning",
                  option3: "They're unrelated words",
                  option4: "They're family words",
                  answer: "2",
                },
                {
                  quiz:
                    "How do antonyms and synonyms help you better understand the meaning of unfamiliar words?",
                  option1:
                    "The relationship between synonyms and antonyms in different texts can help you better understand the meaning of unfamiliar words",
                  option2:
                    "The relationship between synonyms and antonyms in different magazines can help you better understand the meaning of unfamiliar words",
                  option3:
                    "The relationship between synonyms and antonyms in the same sentence or paragraph can help you better understand the meaning of unfamiliar words",
                  option4:
                    "The relationship between synonyms and antonyms in different newspapers can help you better understand the meaning of unfamiliar words",
                  answer: "3",
                },
                {
                  quiz: "What number prefixes did we learn in this class?",
                  option1: "Fr-, Df-, Lo-, Co-",
                  option2: "On-, Tr-, Ez-, Yu-",
                  option3: "Un-, B-, Tr-, Ct-",
                  option4: "Uni-, Bi-, Tri-, Cent-",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Uni-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "3",
                },
                {
                  quiz: "What is the meaning of the number prefix Bi-?",
                  option1: "Four",
                  option2: "Three",
                  option3: "One",
                  option4: "Two",
                  answer: "4",
                },
                {
                  quiz: "What is the meaning of the number prefix Cent-?",
                  option1: "Hundred",
                  option2: "Million",
                  option3: "Ten",
                  option4: "Grams",
                  answer: "1",
                },
              ],
            },
            {
              name: "February 6, 2021",
              questions: 10,
              time: 180,
              quiz_questions: [
                {
                  quiz: "What was the weekly concept of this lesson?",
                  option1: "Out in the World",
                  option2: "Out in the Space",
                  option3: "On a Holiday",
                  option4: "At Home",
                  answer: "1",
                },
                {
                  quiz: "What was the Essential Question of this lesson?",
                  option1: "What can our connections to the world teach us",
                  option2: "How do we contribute to a cause?",
                  option3: "What is best for our environment?",
                  option4: "Can we live without the sun?",
                  answer: "1",
                },
                {
                  quiz: "How many new vocabulary did we learn in this lesson?",
                  option1: "10",
                  option2: "9",
                  option3: "8",
                  option4: "7",
                  answer: "1",
                },
                {
                  quiz: "What was the genre of the text of this lesson?",
                  option1: "Poetry",
                  option2: "Fair Tale",
                  option3: "Realistic Fiction",
                  option4: "Biography ",
                  answer: "1",
                },
                {
                  quiz: "What types of poems did we discuss in this lesson?",
                  option1: "Active and Passive",
                  option2: "Figurative and Dormant",
                  option3: "Plain and Story",
                  option4: "Lyric and Narrative",
                  answer: "4",
                },
                {
                  quiz:
                    "How do we find the point of view of the speaker in a poem?",
                  option1: "By closing the book",
                  option2: "By summarizing the text",
                  option3:
                    "By paying attention to the speaker's word choice and thoughts expressed",
                  option4: "By reading the whole text",
                  answer: "3",
                },
                {
                  quiz: "What is Assonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of a consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "1",
                },
                {
                  quiz: "What is Consonance?",
                  option1:
                    "It's the repetition of a vowel sound in 2 or more words in a poem",
                  option2:
                    "It's the repetition of the middle or final consonant sound in 2 or more words in a poem",
                  option3:
                    "It's the repetition of a diphthong in 2 or more words in a poem",
                  option4:
                    "It's the repetition of a phoneme in 2 or more words in a poem",
                  answer: "2",
                },
                {
                  quiz: "What is personification?",
                  option1: "It is use of human qualities to describe humans",
                  option2:
                    "It is use of human qualities to describe living things",
                  option3:
                    "It is use of human qualities to describe animals, things, or events",
                  option4: "It is use of human qualities to describe people",
                  answer: "3",
                },
                {
                  quiz:
                    "What were the qualities of a good poem as we learned in this lesson?",
                  option1:
                    "Should feature Strong Words, Personification, and Figurative Language",
                  option2:
                    "Should feature Good Grammar, Long Sentences, and No Prepositions",
                  option3:
                    "Should feature No Verbs, No Subject, and No Predicate",
                  option4: "All of the above",
                  answer: "1",
                },
              ],
            },
          ],
        },
      ],
      saveSelectedQuizObj: null,
      renderSelectedTestObj: false,
      renderMCQs: false,
      currentTestIndex: null,
    };
    this.back = this.back.bind(this);
    this.backToDashboard = this.backToDashboard.bind(this);
  }

  // saving selected quiz to state
  updateQuizInfoState(index) {
    const { quiz_info } = this.state;
    this.setState({
      saveSelectedQuizObj: quiz_info[index],
      renderSelectedTestObj: true,
    });
  }

  // back button function
  back() {
    this.setState({
      renderSelectedTestObj: false,
    });
  }

  backToDashboard(param) {
    this.setState({
      renderMCQs: param,
    });
  }

  renderQuizInfo() {
    const { saveSelectedQuizObj } = this.state;
    return (
      <div>
        <h2> {saveSelectedQuizObj.quizName} </h2>
        <div className="row">
          {" "}
          {saveSelectedQuizObj.tests.map((test, i) => {
            return (
              <div
                className="col-md-4"
                key={`${saveSelectedQuizObj.quizName}_${test.name}`}
              >
                <div
                  className="card"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={coverPic2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {test.name} </h5>{" "}
                    <p className="card-text">
                      Total Questions: {test.questions}{" "}
                    </p>{" "}
                    <p>
                      {" "}
                      Total Time: {"  "} {test.time / 60} Minutes{" "}
                    </p>{" "}
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        this.setState({
                          renderMCQs: true,
                          currentTestIndex: i,
                          renderSelectedTestObj: false,
                        });
                      }}
                    >
                      开始测试 {i + 1}{" "}
                      <i className=" fa fa-paper-plane" />
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
        <br />
        <button className="btn btn-secondary" onClick={this.back}>
          Back <i className="fa fa-backward" />
        </button>{" "}
      </div>
    );
  }

  renderQuizList() {
    const { quiz_list } = this.state;
    return (
      <div>
        <h2> Dashboard </h2>
        <div className="row">
          {" "}
          {quiz_list.map((qList, index) => {
            let coverToUse;
            if (qList.quizName == "SatEve") {
              coverToUse = coverPic3;
            } 
            if (qList.quizName == "SunEve") {
              coverToUse = coverPic4;
            } 
            if (qList.quizName == "FriEve") {
              coverToUse = coverPic5;
            } 
            if (qList.quizName == "周一晚") {
              coverToUse = coverPic1;
            }
            if (qList.quizName == "周三晚") {
              coverToUse = coverPic1;
            }
            // else {
            //   coverToUse = coverPic1;
            // }
            return (
              <div className="col-md-4" key={`${qList}_${index}`}>
                <div
                  className="card"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={coverToUse}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {qList.quizName} </h5>{" "}
                    <p className="card-text">
                      {/* Test your comprehension of every {qList.quizName}
                      {" "}class by practicing the following at home.It has{" "}
                      {qList.tests} practices.{" "} */}
                      Tap "Go!" to get started!
                    </p>{" "}
                    <button
                      className="btn btn-info"
                      onClick={this.updateQuizInfoState.bind(this, index)}
                    >
                      Go! <i className=" fa fa-paper-plane" />
                    </button>{" "}
                    {/* <button className="btn btn-primary" >Next <i class=" fa fa-paper-plane"></i></button> */}{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>
    );
  }

  render() {
    const {
      renderSelectedTestObj,
      renderMCQs,
      saveSelectedQuizObj,
      currentTestIndex,
    } = this.state;
    return (
      <div>
        {" "}
        {renderSelectedTestObj ? (
          this.renderQuizInfo()
        ) : renderMCQs ? (
          <MCQs
            currentQuesObj={saveSelectedQuizObj}
            currentTestIndex={currentTestIndex}
            backToDashboard={this.backToDashboard}
          />
        ) : (
          this.renderQuizList()
        )}{" "}
        {console.log(currentTestIndex, saveSelectedQuizObj, renderMCQs)}{" "}
      </div>
    );
  }
}

export default QuizList;
