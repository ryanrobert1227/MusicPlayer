// musics

import alone from "./assets/musics/Alone.mp3";
import anotherLove from "./assets/musics/Another love.mp3";
import believer from "./assets/musics/Believer.mp3";
import cupid from "./assets/musics/Cupid.mp3";
import goodBye from "./assets/musics/Goodbye.mp3";
import heather from "./assets/musics/Heather.mp3";
import iWannaBeYours from "./assets/musics/Iwannabeyours.mp3";
import likeYouDo from "./assets/musics/Likeyoudo.mp3";
import royalty from "./assets/musics/Royalty.mp3";
import unholy from "./assets/musics/Unholy.mp3";
import unstoppable from "./assets/musics/Unstoppable.mp3";

// newMusics

import theresNothingHoldinMeBack from "./assets/musics/newMusics/Theresnothingholdingmeback.mp3";
import shapeOfYou from "./assets/musics/newMusics/Shapeofyou.mp3";
import houseOfMemories from "./assets/musics/newMusics/Houseofmemories.mp3";
import senorita from "./assets/musics/newMusics/Senorita.mp3";
import howToBeFriends from "./assets/musics/newMusics/Howtobefriends.mp3";
import youDontFeelTheSame from "./assets/musics/newMusics/youdontfeelthesame.mp3";
import goodbyeToHoneymoon from "./assets/musics/newMusics/Goodbyetohoneymoon.mp3";
import countingStars from "./assets/musics/newMusics/Countingstars.mp3";
import oFlyOn from "./assets/musics/newMusics/Oflyon.mp3";
import deepDown from "./assets/musics/newMusics/Deepdown.mp3";
import babyOneMoreTime from "./assets/musics/newMusics/Babyonemoretime.mp3";
import aThousandYears from "./assets/musics/newMusics/Athousandyears.mp3";
import attention from "./assets/musics/newMusics/Attention.mp3";
import whatItIs from "./assets/musics/newMusics/Whatitis.mp3";
import seeYouAgain from "./assets/musics/newMusics/Seeyouagain.mp3";
import danceTheNight from "./assets/musics/newMusics/Dancethenight.mp3";
import lastNight from "./assets/musics/newMusics/Lastnight.mp3";
import sayYesToHeaven from "./assets/musics/newMusics/Sayyestoheaven.mp3";
import whatUWant from "./assets/musics/newMusics/Whatuwant.mp3";
import thatsMyGirl from "./assets/musics/newMusics/Thatsmygirl.mp3";
import allMyLife from "./assets/musics/newMusics/Allmylife.mp3";
import always from "./assets/musics/newMusics/Always.mp3";
import everything from "./assets/musics/newMusics/Everything.mp3";
import favoriteSong from "./assets/musics/newMusics/Favoritesong.mp3";
import wishYouTheBest from "./assets/musics/newMusics/Wishyouthebest.mp3";
import wrong from "./assets/musics/newMusics/Wrong.mp3";
import soWhat from "./assets/musics/newMusics/Sowhat.mp3";

// cartazes

import aloneImage from "./assets/Capas/Alone.png";
import anotherLoveImage from "./assets/Capas/AnotherLove.jpg";
import believerImage from "./assets/Capas/Believer.jpg";
import cupidImage from "./assets/Capas/Cupid.jpg";
import goodByeImage from "./assets/Capas/GoodBye.jpg";
import heatherImage from "./assets/Capas/Heather.jpg";
import iWannaBeYoursImage from "./assets/Capas/IWannaBeYours.jpg";
import royaltyImage from "./assets/Capas/royalty.jpg";
import unholyImage from "./assets/Capas/Unholy.png";
import unstoppableImage from "./assets/Capas/Unstoppable.jpg";

const data = [
  {
    id: 1,
    title: "Violão Acústico",
    artist: "Mayer Bronkx",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    url: "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3",
    lyrics: null,
    cover:
      "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img1.jpg",
  },
  {
    id: 2,
    title: "Just Things",
    artist: "John Cris",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    url: "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/Bay%20Street%20Billionaires%20-%20Squadda%20B.mp3",
    lyrics: null,
    cover:
      "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img2.jpg",
  },
  {
    id: 3,
    title: "Maybe Other",
    artist: "Eva Garden",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    url: "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/North%20Oakland%20Extasy%20-%20Squadda%20B.mp3",
    lyrics: null,
    cover:
      "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img4.jpg",
  },
  {
    id: 4,
    title: "It's simple",
    artist: "Emily C. M.",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    url: "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/One%20Time%20-%20Jeremy%20Black.mp3",
    lyrics: null,
    cover:
      "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img5.jpg",
  },
  {
    id: 5,
    title: "Alone",
    artist: "Alan Walker",
    description:
      "Alone is a popular electronic dance music track by Alan Walker. It was released in 2016 and has gained millions of views and streams on various platforms.",
    url: alone,
    lyrics: [
      {
        verse: [
          "Lost in your mind, I wanna know",
          "Am I losin' my mind?",
          "Never let me go",
        ],
      },
      {
        verse: [
          "If this night is not forever",
          "At least we are together",
          "I know I'm not alone",
          "I know I'm not alone",
        ],
      },
      {
        verse: [
          "Anywhere, whenever",
          "Apart but still together",
          "I know I'm not alone",
          "I know I'm not alone",
        ],
      },
      {
        verse: ["I know I'm not alone"],
      },
      {
        verse: ["I know I'm not alone"],
      },
      {
        verse: [
          "Unconscious mind",
          "I'm wide awake",
          "Wanna feel one last time",
          "Take my pain away",
        ],
      },
      {
        verse: [
          "If this night is not forever",
          "At least we are together",
          "I know I'm not alone",
          "I know I'm not alone",
        ],
      },
      {
        verse: [
          "Anywhere, whenever",
          "Apart but still together",
          "I know I'm not alone",
          "I know I'm not alone",
        ],
      },
      {
        verse: ["I know I'm not alone"],
      },
      {
        verse: ["I know I'm not alone"],
      },
      {
        verse: [
          "I'm not alone",
          "I'm not alone",
          "I'm not alone (I know I'm not alone)",
          "I'm not alone",
          "I'm not alone",
          "I'm not alone (I know I'm not alone)",
        ],
      },
    ],
    cover: aloneImage,
  },
  {
    id: 6,
    title: "Another Love ",
    artist: "Tom Odell",
    description:
      "Another Love is a beautiful and heartfelt ballad by Tom Odell. It was released in 2012 and received critical acclaim for its emotional lyrics and soulful vocals.",
    url: anotherLove,
    lyrics: [
      {
        verse: [
          "I wanna take you somewhere so you know I care",
          "But it's so cold and I don't know where",
          "I brought you daffodils in a pretty string",
          "But they won't flower like they did last spring",
        ],
      },
      {
        verse: [
          "And I wanna kiss you, make you feel alright",
          "I'm just so tired to share my nights",
          "I wanna cry and I wanna love",
          "But all my tears have been used up",
        ],
      },
      {
        verse: [
          "On another love, another love",
          "All my tears have been used up",
          "On another love, another love",
          "All my tears have been used up",
          "On another love, another love",
          "All my tears have been used up",
          "Oh, oh",
        ],
      },
      { verse: ["Oh, oh, oh, oh, oh", "Oh, oh, oh, oh, oh"] },
      {
        verse: [
          "And if somebody hurts you, I wanna fight",
          "But my hand's been broken one too many times",
          "So I'll use my voice, I'll be so fucking rude",
          "Words, they always win, but I know I'll lose",
        ],
      },
      {
        verse: [
          "And I'd sing a song that'd be just ours",
          "But I sang 'em all to another heart",
          "And I wanna cry, I wanna learn to love",
          "But all my tears have been used up",
        ],
      },
      {
        verse: [
          "On another love, another love",
          "All my tears have been used up",
          "On another love, another love",
          "All my tears have been used up",
          "On another love, another love",
          "All my tears have been used up",
          "Oh, oh",
        ],
      },
      {
        verse: [
          "Ooh, ooh, ooh, ooh, ooh",
          "Ooh, ooh, ooh, ooh, ooh (oh, need a love now, my heart is thinking of)",
        ],
      },
      {
        verse: [
          "I wanna sing a song that'd be just ours",
          "But I sang 'em all to another heart",
          "And I wanna cry, I wanna fall in love",
          "But all my tears have been used up",
        ],
      },
      {
        verse: [
          "On another love, another love",
          "All my tears have been used up",
          "On another love, another love",
          "All my tears have been used up",
          "On another love, another love",
          "All my tears have been used up",
        ],
      },
      { verse: ["Oh, oh, oh"] },
    ],
    cover: anotherLoveImage,
  },
  {
    id: 7,
    title: "Believer",
    artist: "Imagine Dragons",
    description:
      "Believer is an energetic rock anthem by Imagine Dragons. It was released in 2017 and became a massive hit, known for its powerful vocals and catchy chorus.",
    url: believer,
    lyrics: [
      {
        verse: [
          "First things first",
          "I'ma say all the words inside my head",
          "I'm fired up and tired of the way that things have been, oh-ooh",
          "The way that things have been, oh-ooh",
        ],
      },
      {
        verse: [
          "Second thing second",
          "Don't you tell me what you think that I could be",
          "I'm the one at the sail, I'm the master of my sea, oh-ooh",
          "The master of my sea, oh-ooh",
        ],
      },
      {
        verse: [
          "I was broken from a young age",
          "Taking my sulking to the masses",
          "Writing my poems for the few",
          "That look at me, took to me, shook to me, feeling me",
          "Singing from heartache from the pain",
          "Taking my message from the veins",
          "Speaking my lesson from the brain",
          "Seeing the beauty through the...",
        ],
      },
      {
        verse: [
          "Pain!",
          "You made me a, you made me a believer, believer",
          "Pain!",
          "You break me down and build me up, believer, believer",
          "Pain!",
          "Oh, let the bullets fly, oh, let them rain",
          "My life, my love, my drive, it came from...",
          "Pain!",
          "You made me a, you made me a believer, believer",
        ],
      },
      {
        verse: [
          "First things first",
          "Can you imagine what's about to happen?",
          "It's Weezy the Dragon, I link with the Dragons",
          "And we gon' get ratchet, no need for imaginin'",
        ],
      },
      {
        verse: [
          "This is what's happenin'",
          "Second thing second, I reckon immaculate",
          "Sound about accurate",
          "I know that strength, it don't come, don't come without strategy",
          "I know the sweet, it don't come without cavities",
          "I know the passages come with some traffic",
          "I start with from the basement, end up in the attic",
          "And third thing third",
          "Whoever call me out, they simply can't count",
          "Let's get mathematic, I'm up in this, huh",
        ],
      },
      {
        verse: [
          "Is you a believer?",
          "I get a unicorn out of a zebra",
          "I wear my uniform like a tuxedo",
          "This dragon don't hold his breath, don't need no breather",
          "Love you Ms. Cita, the son of a leader",
          "I know the bloomin' don't come without rain",
          "I know the losin' don't come without shame",
          "I know the beauty don't come without hurt",
        ],
      },
      {
        verse: [
          "Hol' up, hol' up, last thing last",
          "I know that Tunechi don't come without Wayne",
          "I know that losin' don't come without game",
          "I know that glory don't come without...",
          "Don't come without...",
        ],
      },
      {
        verse: [
          "Pain!",
          "You made me a, you made me a believer, believer",
          "Pain!",
          "You break me down and build me up, believer, believer",
          "Pain",
          "Oh, let the bullets fly, oh, let them rain",
          "My life, my love, my drive, it came from...",
          "Pain!",
          "You made me a, you made me a believer, believer",
        ],
      },
      {
        verse: [
          "Last things last",
          "By the grace of fire and flames",
          "You're the face of the future, the blood in my veins, oh-ooh",
          "The blood in my veins, oh-ooh",
          "But they never did, ever lived, ebbing and flowing",
          "Inhibited, limited 'til it broke open and rained down",
          "It rained down, like...",
        ],
      },
      {
        verse: [
          "Pain!",
          "You made me a, you made me a believer, believer",
          "Pain!",
          "You break me down and build me up, believer, believer",
          "Pain",
          "Oh, let the bullets fly, oh, let them rain",
          "My life, my love, my drive, it came from...",
          "Pain!",
          "You made me a, you made me a believer, believer",
        ],
      },
    ],
    cover: believerImage,
  },
  {
    id: 8,
    title: "Cupid",
    artist: "Fifty Fity",
    description:
      "Cupid is a catchy pop track by the talented duo Fifty Fity. Released in 2023, this song combines infectious melodies with uplifting lyrics, capturing the essence of love and romance. With their unique sound and dynamic performance, Fifty Fity continues to captivate audiences worldwide.",
    url: cupid,
    lyrics: [
      {
        verse: [
          "A hopeless romantic all my life",
          "Surrounded by couples all the time",
          "I guess I should take it as a sign",
          "(Ah, why? Ah, why? Ah, why? Ah, why?)",
        ],
      },
      {
        verse: [
          "I'm feeling lonely (lonely)",
          "Oh, I wish I'd find a lover that could hold me (hold me)",
          "Now I'm crying in my room",
          "So skeptical of love (say what you say, but I want it more)",
          "But still I want it more, more, more",
        ],
      },
      {
        verse: [
          "I gave a second chance to cupid",
          "But now I'm left here feeling stupid",
          "Oh, the way he makes me feel that love isn't real",
          "Cupid is so dumb",
        ],
      },
      {
        verse: [
          "I look for his arrows everyday",
          "I guess he got lost or flew away",
          "Waiting around is a waste (waste)",
          "Been counting the days since November",
          "Is loving as good as they say?",
        ],
      },
      {
        verse: [
          "Now I'm so lonely (lonely)",
          "Oh, I wish I'd find a lover that could hold me (hold me)",
          "Now I'm crying in my room",
          "So skeptical of love (say what you say, but I want it more)",
          "But still I want it more, more, more",
        ],
      },
      {
        verse: [
          "I gave a second chance to cupid",
          "But now I'm left here feeling stupid",
          "Oh, the way he makes me feel that love isn't real",
          "Cupid is so dumb",
        ],
      },
      {
        verse: ["(Cupid is so dumb)"],
      },
      {
        verse: [
          "Hopeless girl is seeking someone who will share this feeling",
          "I'm a fool, a fool for love, a fool for love",
        ],
      },
      {
        verse: [
          "I gave a second chance to cupid",
          "But now I'm left here feeling stupid",
          "Oh, the way he makes me feel that love isn't real",
          "Cupid is so dumb",
        ],
      },
      {
        verse: [
          "I gave a second chance to cupid",
          "But now I'm left here feeling stupid",
          "Oh, the way he makes me feel that love isn't real",
          "Cupid is so dumb",
        ],
      },
    ],
    cover: cupidImage,
  },
  {
    id: 10,
    title: "Goodbye",
    artist: "Ramsey",
    description:
      "Goodbye Ramsey by John Smith is a heartfelt ballad that beautifully expresses the emotions of a bittersweet farewell. With tender melodies and poignant lyrics, the song creates a touching tribute to a cherished memory.",
    url: goodBye,
    lyrics: [
      {
        verse: [
          "I can hear the sound of a heart beat",
          "Before it calls out",
          "Won't ever leave my memory",
          "Of bloodshed all around",
        ],
      },
      {
        verse: [
          "And I can see a tear on my father's face",
          "Before it falls out on my enemy",
          "How could I have ever let you down? Oh",
          "When all these trees saw us grow",
          "Cut our teeth and make our bonds right here",
          "And play with shields made of stone",
        ],
      },
      {
        verse: [
          "Share our dreams and sit at thrones, be still",
          "'Cause I see smoke up ahead, and I got steel in my hands, we will",
          "Return like warriors, I swear, that we'll find glory up ahead",
          "Tell me",
        ],
      },
      {
        verse: [
          "Where is my home?",
          "I don't recognize the faces anymore, oh",
          "Where is my friend?",
          "The one I've known since I was only just a kid",
        ],
      },
      {
        verse: [
          "I think it's time to say goodbye",
          "Goodbye, goodbye",
          "Goodbye, goodbye, ah",
          "It's time to say goodbye",
          "Goodbye, goodbye",
          "Goodbye, goodbye, ah",
        ],
      },
      {
        verse: [
          "It's time to say goodbye",
          "Goodbye, goodbye",
          "Goodbye, goodbye, ah",
          "It's time to say goodbye",
          "Goodbye, goodbye",
          "Goodbye, goodbye, ah",
        ],
      },
      {
        verse: [
          "Is it time to say goodbye?",
          "Goodbye, goodbye",
          "Goodbye, goodbye, ah",
          "It's time to say goodbye",
          "Goodbye, goodbye",
          "Goodbye, goodbye, ah",
        ],
      },
      {
        verse: [
          "Is it time to say goodbye?",
          "Goodbye, goodbye",
          "Goodbye, goodbye, ah",
          "It's time to say goodbye",
          "Goodbye, goodbye",
          "Goodbye, goodbye, ah",
        ],
      },
    ],
    cover: goodByeImage,
  },
  {
    id: 11,
    title: "Heather",
    artist: "Conan Gray",
    description:
      "Heather is a heartfelt indie pop song by Conan Gray. It was released in 2020 and has resonated with listeners for its introspective lyrics and emotional delivery.",
    url: heather,
    lyrics: [
      {
        verse: [
          "I still remember the third of December, me in your sweater",
          "You said it looked better on me than it did you",
          "Only if you knew how much I liked you",
          "But I watch your eyes as she",
        ],
      },
      {
        verse: [
          "Walks by",
          "What a sight for sore eyes",
          "Brighter than the blue sky",
          "She's got you mesmerized while I die",
        ],
      },
      {
        verse: [
          "Why would you ever kiss me?",
          "I'm not even half as pretty",
          "You gave her your sweater, it's just polyester",
          "But you like her better",
          "Wish I were Heather",
        ],
      },
      {
        verse: [
          "Watch as she stands with her, holding your hand",
          "Put your arm 'round her shoulder, now I'm getting colder",
          "But how could I hate her? She's such an angel",
          "But then again, kinda wish she were dead as she",
        ],
      },
      {
        verse: [
          "Walks by",
          "What a sight for sore eyes",
          "Brighter than the blue sky",
          "She's got you mesmerized while I die",
        ],
      },
      {
        verse: [
          "Why would you ever kiss me?",
          "I'm not even half as pretty",
          "You gave her your sweater, it's just polyester",
          "But you like her better",
          "I wish I were Heather",
        ],
      },
      {
        verse: ["I wish I were Heather", "(Oh, oh)"],
      },
      {
        verse: ["Wish I were Heather"],
      },
      {
        verse: [
          "Why would you ever kiss me?",
          "I'm not even half as pretty",
          "You gave her your sweater, it's just polyester",
        ],
      },
      {
        verse: ["But you like her better", "Wish I were"],
      },
    ],
    cover: heatherImage,
  },
  {
    id: 12,
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    description:
      "I Wanna Be Yours is a romantic indie rock song by Arctic Monkeys. It was released in 2013 and is known for its poetic lyrics and dreamy atmosphere.",
    url: iWannaBeYours,
    lyrics: [
      {
        verse: [
          "I wanna be your vacuum cleaner",
          "Breathing in your dust",
          "I wanna be your Ford Cortina",
          "I will never rust",
        ],
      },
      {
        verse: [
          "If you like your coffee hot",
          "Let me be your coffee pot",
          "You call the shots, babe",
          "I just wanna be yours",
        ],
      },
      {
        verse: [
          "Secrets I have held in my heart",
          "Are harder to hide than I thought",
          "Maybe I just wanna be yours",
          "I wanna be yours, I wanna be yours",
        ],
      },
      {
        verse: ["Wanna be yours", "Wanna be yours", "Wanna be yours"],
      },
      {
        verse: [
          "Let me be your leccy meter",
          "And I'll never run out",
          "Let me be the portable heater",
          "That you'll get cold without",
        ],
      },
      {
        verse: [
          "I wanna be your setting lotion (wanna be)",
          "Hold your hair in deep devotion (I'll be)",
          "At least as deep as the Pacific Ocean",
          "Now I wanna be yours",
        ],
      },
      {
        verse: [
          "Secrets I have held in my heart",
          "Are harder to hide than I thought",
          "Maybe I just wanna be yours",
          "I wanna be yours, I wanna be yours",
        ],
      },
      {
        verse: [
          "Wanna be yours",
          "Wanna be yours",
          "Wanna be yours",
          "Wanna be yours",
          "Wanna be yours",
          "Wanna be yours",
          "Wanna be yours",
          "(Wanna be yours)",
        ],
      },
      {
        verse: [
          "I wanna be your vacuum cleaner (wanna be yours)",
          "Breathing in your dust (wanna be yours)",
          "I wanna be your Ford Cortina (wanna be yours)",
          "I will never rust (wanna be yours)",
        ],
      },
      {
        verse: [
          "I just wanna be yours (wanna be yours)",
          "I just wanna be yours (wanna be yours)",
          "I just wanna be yours (wanna be yours)",
        ],
      },
    ],
    cover: iWannaBeYoursImage,
  },
  {
    id: 15,
    title: "Like You Do",
    artist: "Joji",
    description:
      "Like You Do is a soulful R&B song by Joji. It was released in 2019 and showcases Joji's smooth vocals and introspective lyrics.",
    url: likeYouDo,
    lyrics: [
      {
        verse: [
          "Lately",
          "I can't help but think that our roads might take us down different phases",
          "Don't wanna complicate the rhythm that we got but I'm speechless",
          "When everything's so pure, can it be aimless?",
          "Painless?",
        ],
      },
      {
        verse: [
          "If you ever go",
          "All the songs that we like",
          "Will sound like bittersweet lullabies",
        ],
      },
      {
        verse: [
          "Lost in the blue",
          "They don't love me like you do",
          "Those chills that I knew",
          "They were nothing without you",
          "And everyone else",
          "They don't matter now",
          "You're the one I can't lose",
          "No one loves me like you do",
        ],
      },
      {
        verse: [
          "Since I met you",
          "All the gloomy days just seem to shine a little more brightly",
          "Consider what we've got 'cause I can never take you for granted",
          "Is there another us on this whole planet?",
          "Planet?",
        ],
      },
      {
        verse: [
          "If you ever go",
          "All the songs that we like",
          "Will sound like bittersweet lullabies",
        ],
      },
      {
        verse: [
          "Lost in the blue",
          "They don't love me like you do",
          "Those chills that I knew",
          "They were nothing without you",
          "And everyone else",
          "They don't matter now",
          "You're the one I can't lose",
          "No one loves me like you do",
          "No one loves me like you do",
        ],
      },
      {
        verse: [
          "I don't wanna seem foolish",
          "When I'm jumping into this",
          "You're all that I see",
        ],
      },
      {
        verse: [
          "Lost in the blue",
          "They don't love me like you do",
          "Those chills that I knew",
          "They were nothing without you",
          "And everyone else",
          "They don't matter now",
          "You're the one I can't lose",
          "No one loves me like you do",
          "No one loves me like you do",
        ],
      },
    ],
    cover:
      "https://akamai.sscdn.co/uploadfile/letras/albuns/d/9/9/3/967981601379706.jpg",
  },
  {
    id: 16,
    title: "Royalty",
    artist: "Egzod & Maestro Chives",
    description:
      "'Royalty' is an electrifying collaboration between Egzod and Maestro Chives, combining electronic music and orchestral arrangements for a powerful and epic sound. With driving beats, soaring melodies, and intricate production, the track showcases the talent of both artists. It's an innovative and exhilarating musical experience that captivates listeners.",
    url: royalty,
    lyrics: [
      {
        verse: [
          "Say I'm cold hearted",
          "But I'm just getting started",
          "Got my eyes on the the target",
          "Now, now",
        ],
      },
      {
        verse: [
          "Oooh, oooh, oooh",
          "'Till the battles won",
          "'Till kingdom come",
          "Oooh, oooh, oooh",
          "I'll never run",
        ],
      },
      {
        verse: [
          "Best to give me your loyalty",
          "'Cause I'm taking the world you'll see",
          "They'll be calling me, calling me",
          "They'll be calling me royalty",
          "Best to give me your loyalty",
          "'Cause I'm taking the world you'll see",
          "They'll be calling me, calling me",
          "They'll be calling me royalty",
        ],
      },
      {
        verse: ["They'll be calling me royalty"],
      },
      {
        verse: [
          "Oooh, oooh, oooh",
          "'Till the battles won",
          "'Till kingdom come",
          "Oooh, oooh, oooh",
          "I'll never run",
        ],
      },
      {
        verse: [
          "Best to give me your loyalty",
          "'Cause I'm taking the world you'll see",
          "They'll be calling me, calling me",
          "They'll be calling me royalty",
          "Best to give me your loyalty",
          "'Cause I'm taking the world you'll see",
          "They'll be calling me, calling me",
          "They'll be calling me royalty",
        ],
      },
      {
        verse: [
          "They'll be calling me royalty",
          "They'll be calling me royalty",
          "They'll be calling me royalty",
        ],
      },
    ],
    cover: royaltyImage,
  },
  {
    id: 17,
    title: "Unholy",
    artist: "Puma Blue",
    description:
      "Unholy is a dreamy indie rock song by Puma Blue. It was released in 2019 and is known for its atmospheric sound and haunting vocals.",
    url: unholy,
    lyrics: [
      {
        verse: [
          "Mummy don't know daddy's getting hot",
          "At the body shop, doing something unholy",
        ],
      },
      {
        verse: [
          "He lucky, lucky, yeah (ooh)",
          "He lucky, lucky, yeah (ye-yeah)",
          "He lucky, lucky, yeah",
          "He lucky, lucky, yeah",
        ],
      },
      {
        verse: [
          "A lucky, lucky girl",
          "She got married to a boy like you",
          "She'd kick you out if she ever, ever knew",
          "'Bout all the - you tell me that you do",
        ],
      },
      {
        verse: [
          "Dirty, dirty boy",
          "You know everyone is talking on the scene",
          "I hear them whispering 'bout the places that you've been",
          "And how you don't know how to keep your business clean",
        ],
      },
      {
        verse: [
          "Mummy don't know daddy's getting hot",
          "At the body shop, doing something unholy",
          "He's sat back while she's dropping it, she be popping it",
          "Yeah, she put it down slowly",
          "Oh-ee-oh-ee-oh, he left his kids at",
          "Ho-ee-oh-ee-ome, so he can get that",
          "Mummy don't know daddy's getting hot",
          "At the body shop, doing something unholy (woo)",
        ],
      },
      {
        verse: [
          "Mmm, daddy, daddy, if you want it, drop the add'y (yuh)",
          "Give me love, give me Fendi, my Balenciaga daddy",
          "You gon' need to bag it up, 'cause I'm spending on Rodeo (woo)",
          "You can watch me back it up, I'll be gone in the a.m.",
          "And he, he get me Prada, get me Miu Miu like Rihanna (ah)",
          "He always call me 'cause I never cause no drama",
          "And when you want it, baby, I know I got you covered",
          "And when you need it, baby, just jump under the covers",
        ],
      },
      {
        verse: [
          "Mummy don't know daddy's getting hot",
          "At the body shop, doin' somethin' unholy",
          "He's sat back while she's dropping it, she be popping it",
          "Yeah, she put it down slowly",
          "Oh-ee-oh-ee-oh, he left his kids at",
          "Ho-ee-oh-ee-ome, so he can get that",
          "Mummy don't know daddy's getting hot",
          "At the body shop, doin' something unholy",
        ],
      },
    ],
    cover: unholyImage,
  },
  {
    id: 18,
    title: "Unstoppable",
    artist: "Sia",
    description:
      "Unstoppable is an empowering pop anthem by Sia. It was released in 2016 and has become synonymous with strength and resilience.",
    url: unstoppable,
    lyrics: [
      {
        verse: [
          "All smiles, I know what it takes to fool this town",
          "I'll do it 'til the sun goes down",
          "And all through the nighttime",
          "Oh, yeah",
          "Oh, yeah, I'll tell you what you wanna hear",
          "Leave my sunglasses on while I shed a tear",
          "It's never the right time",
          "Yeah, yeah",
        ],
      },
      {
        verse: [
          "I put my armor on, show you how strong I am",
          "I put my armor on, I'll show you that I am",
        ],
      },
      {
        verse: [
          "I'm unstoppable",
          "I'm a Porsche with no brakes",
          "I'm invincible",
          "Yeah, I win every single game",
          "I'm so powerful",
          "I don't need batteries to play",
          "I'm so confident",
          "Yeah, I'm unstoppable today",
        ],
      },
      {
        verse: [
          "Unstoppable today",
          "Unstoppable today",
          "Unstoppable today",
          "I'm unstoppable today",
        ],
      },
      {
        verse: [
          "Break down, only alone I will cry out loud",
          "You'll never see what's hiding out",
          "Hiding out deep down",
          "Yeah, yeah",
          "I know, I've heard that to let your feelings show",
          "Is the only way to make friendships grow",
          "But I'm too afraid now",
          "Yeah, yeah",
        ],
      },
      {
        verse: [
          "I put my armor on, show you how strong I am",
          "I put my armor on, I'll show you that I am",
        ],
      },
      {
        verse: [
          "I'm unstoppable",
          "I'm a Porsche with no brakes",
          "I'm invincible",
          "Yeah, I win every single game",
          "I'm so powerful",
          "I don't need batteries to play",
          "I'm so confident",
          "Yeah, I'm unstoppable today",
        ],
      },
      {
        verse: [
          "Unstoppable today",
          "Unstoppable today",
          "Unstoppable today",
          "I'm unstoppable today",
          "Unstoppable today",
          "Unstoppable today",
          "Unstoppable today",
          "I'm unstoppable today",
        ],
      },
      {
        verse: [
          "I put my armor on, show you how strong I am",
          "I put my armor on, I'll show you that I am",
        ],
      },
      {
        verse: [
          "I'm unstoppable",
          "I'm a Porsche with no brakes",
          "I'm invincible",
          "Yeah, I win every single game",
          "I'm so powerful",
          "I don't need batteries to play",
          "I'm so confident",
          "Yeah, I'm unstoppable today",
        ],
      },
      {
        verse: [
          "Unstoppable today",
          "Unstoppable today",
          "Unstoppable today",
          "I'm unstoppable today",
          "Unstoppable today",
          "Unstoppable today",
          "Unstoppable today",
          "I'm unstoppable today",
        ],
      },
    ],
    cover: unstoppableImage,
  },
  {
    id: 21,
    title: "There's Nothing Holdin' Me Back",
    artist: "Shawn Mendes",
    description:
      "There's Nothing Holdin' Me Back is an energetic pop-rock track by Shawn Mendes. Released in 2017, this song showcases Mendes' powerful vocals and catchy melodies, capturing the feeling of freedom and youthful exuberance.",
    url: theresNothingHoldinMeBack,
    lyrics: [
      {
        verse: [
          "I wanna follow where she goes",
          "I think about her and she knows it",
          "I wanna let her take control",
          "'Cause every time that she gets close, yeah",
        ],
      },
      { verse: ["She pulls me in enough to keep me guessin', hmm"] },
      {
        verse: [
          "And maybe I should stop and start confessin'",
          "Confessin', yeah",
        ],
      },
      {
        verse: [
          "Oh, I've been shakin'",
          "I love it when you go crazy",
          "You take all my inhibitions",
          "Baby, there's nothing holdin' me back",
          "You take me places that tear up my reputation",
          "Manipulate my decisions",
          "Baby, there's nothing holdin' me back",
        ],
      },
      { verse: ["There's nothing holdin' me back"] },
      { verse: ["There's nothing holdin' me back"] },
      {
        verse: [
          "She says that she's never afraid",
          "Just picture everybody naked",
          "She really doesn't like to wait",
          "Not really into hesitation",
        ],
      },
      {
        verse: [
          "Pulls me in enough to keep me guessin', whoa-oh",
          "And maybe I should stop and start confessin'",
          "Confessin', yeah",
        ],
      },
      {
        verse: [
          "Oh, I've been shakin'",
          "I love it when you go crazy",
          "You take all my inhibitions",
          "Baby, there's nothing holdin' me back",
          "You take me places that tear up my reputation",
          "Manipulate my decisions",
          "Baby, there's nothing holdin' me back",
        ],
      },
      { verse: ["There's nothing holdin' me back"] },
      {
        verse: [
          "'Cause if we lost our minds and we took it way too far",
          "I know we'd be alright, I know we would be alright",
          "If you were by my side and we stumbled in the dark",
          "I know we'd be alright, I know we would be alright",
          "'Cause if we lost our minds and we took it way too far",
          "I know we'd be alright, I know we would be alright",
          "If you were by my side and we stumbled in the dark",
          "I know we'd be alright, we would be alright",
        ],
      },
      {
        verse: [
          "Oh, I've been shakin'",
          "I love it when you go crazy",
          "You take all my inhibitions",
          "Baby, there's nothing holdin' me back",
          "You take me places that tear up my reputation",
          "Manipulate my decisions",
          "Baby, there's nothing holdin' me back, oh-whoa",
        ],
      },
      {
        verse: [
          "There's nothing holdin' me back",
          "I feel so free when you're with me, baby",
          "Baby, there's nothing holdin' me back",
        ],
      },
    ],
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/35d5f7dd0b398bb37287b3454f0b05b9/264x264-000000-80-0-0.jpg",
  },
  {
    id: 22,
    title: "Shape of You",
    artist: "Ed Sheeran",
    description:
      "Shape of You is a chart-topping pop song by Ed Sheeran. Released in 2017, it features infectious beats, catchy lyrics, and Sheeran's soulful voice, making it an instant hit.",
    url: shapeOfYou,
    lyrics: [
      {
        verse: [
          "The club isn't the best place to find a lover",
          "So the bar is where I go",
          "Me and my friends at the table doing shots",
          "Drinking fast and then we talk slow",
        ],
      },
      {
        verse: [
          "Come over and start up a conversation with just me",
          "And trust me, I'll give it a chance",
          "Now take my hand, stop, put Van The Man on the jukebox",
          "And then we start to dance",
          "And now I'm singing like",
        ],
      },
      {
        verse: [
          "Girl, you know I want your love",
          "Your love was handmade for somebody like me",
          "Come on now, follow my lead",
          "I may be crazy, don't mind me",
          "Say: Boy, let's not talk too much",
          "Grab on my waist and put that body on me",
          "Come on now, follow my lead",
          "Come, come on now, follow my lead",
        ],
      },
      {
        verse: [
          "I'm in love with the shape of you",
          "We push and pull like a magnet do",
          "Although my heart is falling too",
          "I'm in love with your body",
          "And last night you were in my room",
          "And now my bedsheets smell like you",
          "Everyday discovering something brand new",
          "I'm in love with your body",
        ],
      },
      {
        verse: [
          "Oh I, oh I, oh I, oh I",
          "I'm in love with your body",
          "Oh I, oh I, oh I, oh I",
          "I'm in love with your body",
          "Oh I, oh I, oh I, oh I",
          "I'm in love with your body",
          "Everyday discovering something brand new",
          "I'm in love with the shape of you",
        ],
      },
      {
        verse: [
          "One week in, we let the story begin",
          "We're going out on our first date",
          "You and me are thrifty, so go all you can eat",
          "Fill up your bag and I fill up a plate",
        ],
      },
      {
        verse: [
          "We talk for hours and hours about the sweet and the sour",
          "And how your family is doing okay",
          "Leave and get in a taxi, then kiss in the backseat",
          "Tell the driver: Make the radio play",
          "And I'm singing like",
        ],
      },
      {
        verse: [
          "Girl, you know I want your love",
          "Your love was handmade for somebody like me",
          "Come on now, follow my lead",
          "I may be crazy, don't mind me",
          "Say: Boy, let's not talk too much",
          "Grab on my waist and put that body on me",
          "Come on now, follow my lead",
          "Come, come on now, follow my lead",
        ],
      },
      {
        verse: [
          "I'm in love with the shape of you",
          "We push and pull like a magnet do",
          "Although my heart is falling too",
          "I'm in love with your body",
          "And last night you were in my room",
          "And now my bedsheets smell like you",
          "Everyday discovering something brand new",
          "I'm in love with your body",
        ],
      },
      {
        verse: [
          "Oh I, oh I, oh I, oh I",
          "I'm in love with your body",
          "Oh I, oh I, oh I, oh I",
          "I'm in love with your body",
          "Oh I, oh I, oh I, oh I",
          "I'm in love with your body",
          "Everyday discovering something brand new",
          "I'm in love with the shape of you",
        ],
      },
      {
        verse: [
          "Come on, be my baby, come on",
          "Come on, be my baby, come on",
          "Come on, be my baby, come on",
          "Come on, be my baby, come on",
        ],
      },
      {
        verse: [
          "Come on, be my baby, come on",
          "Come on, be my baby, come on",
          "Come on, be my baby, come on",
          "Come on, be my baby, come on",
        ],
      },
      {
        verse: [
          "I'm in love with the shape of you",
          "We push and pull like a magnet do",
          "Although my heart is falling too",
          "I'm in love with your body",
          "Last night you were in my room",
          "And now my bedsheets smell like you",
          "Everyday discovering something brand new",
          "I'm in love with your body",
        ],
      },
      {
        verse: [
          "Come on, be my baby, come on",
          "Come on, be my baby, come on (I'm in love with your body)",
          "Come on, be my baby, come on",
          "Come on, be my baby, come on (I'm in love with your body)",
        ],
      },
      {
        verse: [
          "Come on, be my baby, come on",
          "Come on, be my baby, come on (I'm in love with your body)",
          "Everyday discovering something brand new",
          "I'm in love with the shape of you",
        ],
      },
    ],
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/3/35/Ed_Sheeran_-_Shape_of_You.png",
  },
  {
    id: 24,
    title: "House of Memories",
    artist: "Panic! at the Disco",
    description:
      "House of Memories is a nostalgic pop-rock song by Panic! at the Disco. Released in 2016, it captures the essence of reminiscing about past experiences and cherishing the memories created.",
    url: houseOfMemories,
    lyrics: [
      { verse: ["Whoa, oh", "Whoa, oh"] },
      {
        verse: [
          "If you're a lover, you should know",
          "The lonely moments just get lonelier",
          "The longer you're in love",
          "Than if you were alone",
        ],
      },
      { verse: ["Memories turn into daydreams", "Become a taboo"] },
      {
        verse: [
          "I don't want to be afraid",
          "The deeper that I go",
          "It takes my breath away",
          "Soft hearts, electric souls",
        ],
      },
      { verse: ["Heart to heart and eyes to eyes", "Is this taboo?"] },
      {
        verse: [
          "Baby, we built this house on memories",
          "Take my picture now, shake it till you see it",
          "And when your fantasies become your legacy",
          "Promise me a place in your house of memories",
        ],
      },
      { verse: ["Whoa, oh", "Whoa, oh"] },
      {
        verse: [
          "I think of you from time to time",
          "More than I thought I would",
          "You were just too kind",
          "And I was too young to know",
        ],
      },
      { verse: ["That's all that really matters", "I was a fool"] },
      {
        verse: [
          "Baby, we built this house on memories",
          "Take my picture now, shake it till you see it",
          "And when your fantasies become your legacy",
          "Promise me a place in your house of memories",
        ],
      },
      { verse: ["Whoa, oh", "Whoa, oh"] },
      {
        verse: [
          "Those thoughts of past lovers",
          "They'll always haunt me",
          "I wish I could believe",
          "You'd never wrong me",
        ],
      },
      {
        verse: [
          "Then will you remember me in the same way",
          "As I remember you?",
        ],
      },
      {
        verse: [
          "Baby, we built this house on memories",
          "Take my picture now, shake it till you see it",
          "And when your fantasies become your legacy",
          "Promise me a place",
        ],
      },
      {
        verse: [
          "Baby, we built this house on memories",
          "Take my picture now, shake it till you see it",
          "And when your fantasies become your legacy",
          "Promise me a place in your house of memories",
        ],
      },
      {
        verse: [
          "Whoa, oh",
          "Whoa, oh (in your house of memories)",
          "Whoa, oh",
          "Whoa, oh (promise me a place)",
        ],
      },
    ],
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/1c6f831c8be7fa35c1c0d43673e8afbb/264x264-000000-80-0-0.jpg",
  },
  {
    id: 25,
    title: "Señorita",
    artist: "Shawn Mendes, Camila Cabello",
    description:
      "Señorita is a sultry duet by Shawn Mendes and Camila Cabello. Released in 2019, it combines catchy Latin-inspired rhythms with passionate vocals, creating a steamy and captivating love song.",
    url: senorita,
    lyrics: [
      {
        verse: [
          "I love it when you call me señorita",
          "I wish I could pretend I didn't need ya",
          "But every touch is oh, la, la, la",
          "It's true, la, la, la",
          "Oh, I should be runnin'",
          "Oh, you keep me coming for ya",
        ],
      },
      {
        verse: [
          "Land in Miami",
          "The air was hot from summer rain",
          "Sweat drippin' off me",
          "Before I even knew her name, la, la, la",
          "It felt like oh, la, la, la, yeah, no",
          "Sapphire and moonlight, we danced for hours in the sand",
          "Tequila sunrise, her body fit right in my hands, la, la, la",
          "It felt like oh, la, la, la, yeah",
        ],
      },
      {
        verse: [
          "I love it when you call me señorita",
          "I wish I could pretend I didn't need ya",
          "But every touch is oh, la, la, la",
          "It's true, la, la, la",
          "Oh, I should be runnin'",
        ],
      },
      {
        verse: [
          "Oh, you know I love it when you call me señorita",
          "I wish it wasn't so damn hard to leave ya",
          "But every touch is oh, la, la, la",
          "It's true, la, la, la",
          "Oh, I should be runnin'",
          "Oh, you keep me coming for ya",
        ],
      },
      {
        verse: [
          "Locked in the hotel",
          "There's just some things that never change",
          "You say we're just friends",
          "But friends don't know the way you taste, la, la, la",
          "'Cause you know it's been a long time coming",
          "Don't ya let me fall",
          "Oh, when your lips undress me, hooked on your tongue",
          "Oh, love, your kiss is deadly, don't stop",
        ],
      },
      {
        verse: [
          "I love it when you call me señorita",
          "I wish I could pretend I didn't need ya",
          "But every touch is oh, la, la, la",
          "It's true, la, la, la",
          "Oh, I should be runnin'",
        ],
      },
      {
        verse: [
          "Oh, you know I love it when you call me señorita",
          "I wish it wasn't so damn hard to leave ya",
          "But every touch is oh, la, la, la",
          "It's true, la, la, la",
          "Oh, I should be runnin'",
          "Oh, you keep me coming for ya",
        ],
      },
      {
        verse: [
          "All along I've been coming for ya (for you)",
          "And I hope it means something to you",
          "Call my name, I'll be coming for ya (coming for you)",
          "Coming for ya (coming for you)",
          "For ya",
          "For ya (oh, she loves it when I come)",
          "For ya",
          "Oh, I should be runnin'",
          "Oh, you keep me coming for ya",
        ],
      },
    ],
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Shawn_Mendes_and_Camila_Cabello_-_Señorita.png",
  },
  {
    id: 26,
    title: "How To Be Friends",
    artist: "Martin Jasper",
    description:
      "How To Be Friends is a feel-good pop track by Martin Jasper. Released in 2022, this song is about navigating the complexities of relationships and learning to maintain a strong friendship.",
    url: howToBeFriends,
    lyrics: [
      { verse: ["How To Be Friends Lyrics Martin Jasper"] },
      {
        verse: [
          "I know you told me not to call",
          "Only time and space could ever heal it all",
          "Really I’ve been tryna give you what you want",
          "I don’t wanna but I gotta",
          "Let you be with someone new",
          "Someone who could do the things I couldn’t do",
          "Take a weekend in the hills and get a room for two",
          "Wish I woulda, wish I coulda",
        ],
      },
      {
        verse: [
          "Now you look happy in your pictures",
          "When I see you smile I can tell you’re doing better",
        ],
      },
      {
        verse: [
          "Don’t know how to be friends with you",
          "And not sleep next to you",
          "And not talk about our day",
          "Don’t know any other way",
          "Don’t know how to be friends with you",
          "And not sleep next to you",
          "If we can’t be the way we used to",
          "What’s the point of life without you",
        ],
      },
      {
        verse: [
          "I wish we had someone to blame",
          "Problem is we never grew we stayed the same",
          "Waiting for some better days that never came",
          "Wish we hadn’t waited",
        ],
      },
      {
        verse: [
          "Now you look happy in your pictures",
          "When I see you out I can tell you’re doing better",
        ],
      },
      {
        verse: [
          "Don’t know how to be friends with you",
          "And not sleep next to you",
          "And not talk about our day",
          "Don’t know any other way",
          "Don’t know how to be friends with you",
          "And not sleep next to you",
          "If we can’t be the way we used to",
          "What’s the point of life without you",
        ],
      },
      {
        verse: [
          "Can we have one more chance to turn this around",
          "One more night to figure this out",
          "One more time just like we used to",
        ],
      },
    ],
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/1374cf3b217768a8d7b57be47e9ccc30/264x264-000000-80-0-0.jpg",
  },
  {
    id: 27,
    title: "You Don't Feel The Same",
    artist: "Obi Ben",
    description:
      "you don't feel the same is a soulful R&B song by Obi Ben. Released in 2022, it delves into the emotions of unrequited love and the struggle of moving on.",
    url: youDontFeelTheSame,
    lyrics: [
      {
        verse: [
          "She's different from the rest",
          "Patagonia",
          "Drives a jeep but I gotta stress",
          "She's different from the rest",
          "Make me feel light",
          "Talking all night",
          "Yeah, yeah",
          "You make it easy",
          "You make it easy",
          "To know what I want",
          "But saying it's a little bit harder and I’ll try but",
        ],
      },
      {
        verse: [
          "I'm tripping over things to say",
          "I don't wanna sound cliche",
          "But I think about you",
          "Every single day",
          "I don't know what went wrong",
          "I've wanted you for way too long",
          "I just got, gotta face the truth",
          "That you don't feel the same",
        ],
      },
      {
        verse: [
          "You don't feel the same",
          "You don't feel the same",
          "I don't want your sympathy",
          "You don't feel the same",
          "All I wanted was to say is",
          "You're flawless",
        ],
      },
      {
        verse: [
          "She's harder to",
          "Read than the stars",
          "I thought we had something",
          "But I keep guessing",
          "I can't tell if it's really a spark",
          "Am I relapsing",
          "From a teenage dream?",
          "Or are you just clueless?",
          "Are you just clueless?",
          "I don't know about you but",
        ],
      },
      {
        verse: [
          "I'm tripping over things to say",
          "I don't wanna sound cliche",
          "But I think about you",
          "Every single day",
          "I don't know what went wrong",
          "I've wanted you for way too long",
          "I just got, gotta face the truth",
        ],
      },
      {
        verse: [
          "That you don't feel the same",
          "I wish you felt differently",
          "You don't feel the same",
          "You don't feel the same",
          "I don't want your sympathy",
          "You don't feel the same",
        ],
      },
      {
        verse: ["I guess I'm moving on", "'Cause you don't feel the same"],
      },
    ],
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/6c60a36b7c55f60f7dc3f9de4c4b5f76/264x264-000000-80-0-0.jpg",
  },
  {
    id: 28,
    title: "Goodbye To Honeymoon",
    artist: "Cloudy June",
    description:
      "Goodbye To Honeymoon is a poignant indie pop song by Cloudy June. Released in 2020, it explores the bittersweet feelings of letting go and moving on from a past relationship.",
    url: goodbyeToHoneymoon,
    lyrics: [
      {
        verse: [
          "I fell like a movie in a foreign language",
          "And I think you'd understand it",
          "If for once you really tried",
        ],
      },
      {
        verse: [
          "Yeah, I tend to bail out",
          "When things get hard to handle",
          "Fights follow the scandals",
          "And the scandals lonely nights",
        ],
      },
      {
        verse: [
          "Oh, we got so good at raising our voices",
          "Higher than we should",
          "The words turn into poison",
        ],
      },
      {
        verse: [
          "This is the time when I scream stead of talking",
          "This when you break a glass in the hallway",
        ],
      },
      {
        verse: [
          "Oh, it feels like it's all we do",
          "Goodbye to honeymoon",
          "Can we go back to the day when we started?",
        ],
      },
      {
        verse: [
          "Yeah, you twist my words in every sentence",
          "And I doubt your good intentions",
          "Bet it's all about your pride",
        ],
      },
      {
        verse: [
          "I call your names",
          "I know I'm not supposed to",
          "And I hate it too, I told you",
          "But you make me lose my mind",
        ],
      },
      {
        verse: [
          "Oh, we got so good at raising our voices",
          "Higher than we should",
          "The words turn into poison",
        ],
      },
      {
        verse: [
          "This is the time when I scream stead of talking",
          "This when you break a glass in the hallway",
        ],
      },
      {
        verse: [
          "Oh, it feels like it's all we do",
          "Goodbye to honeymoon",
          "Can we go back to the day when we started?",
        ],
      },
      {
        verse: [
          "In the eye of the storm it's quiet and calm",
          "I'm scared I could lose you through this",
          "Not too long ago I knew we belong",
          "I don't wanna lose you but",
        ],
      },
      {
        verse: [
          "(This is the time when I scream stead of talking)",
          "This when you break a glass in the hallway",
        ],
      },
      {
        verse: [
          "Oh, it feels like it's all we do",
          "Goodbye to honeymoon",
          "Can we go back to the day when we started?",
        ],
      },
      {
        verse: [
          "This is the time when I scream stead of talking",
          "This when you break a glass in the hallway",
        ],
      },
      {
        verse: [
          "Oh, it feels like it's all we do",
          "Goodbye to honeymoon",
          "Can we go back to the day when we started?",
        ],
      },
    ],
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/9b3c48c71f7900adca5410a26a135764/264x264-000000-80-0-0.jpg",
  },
  {
    id: 29,
    title: "Counting Stars",
    artist: "OneRepublic",
    description:
      "Counting Stars is a catchy pop-rock anthem by OneRepublic. Released in 2013, it showcases the band's signature sound, blending infectious melodies with introspective lyrics.",
    url: countingStars,
    lyrics: [
      {
        verse: [
          "Lately, I've been",
          "I've been losing sleep",
          "Dreaming about the things that we could be",
          "But baby, I've been",
          "I've been praying hard",
          "Said, no more counting dollars",
          "We'll be counting stars",
        ],
      },
      { verse: ["Yeah, we'll be counting stars"] },
      {
        verse: [
          "I see this life like a swinging vine",
          "Swing my heart across the line",
          "And in my face is flashing signs",
          "Seek it out and ye' shall find",
        ],
      },
      {
        verse: [
          "Old, but I'm not that old",
          "Young, but I'm not that bold",
          "And I don't think the world is sold",
          "On just doing what we're told",
        ],
      },
      {
        verse: [
          "I feel something so right",
          "By doing the wrong thing",
          "And I feel something so wrong",
          "By doing the right thing",
        ],
      },
      {
        verse: [
          "I couldn't lie",
          "Couldn't lie, couldn't lie",
          "Everything that kills me",
          "Makes me feel alive",
        ],
      },
      {
        verse: [
          "Lately, I've been",
          "I've been losing sleep",
          "Dreaming about the things that we could be",
          "But baby, I've been",
          "I've been praying hard",
          "Said, no more counting dollars",
          "We'll be counting stars",
        ],
      },
      {
        verse: [
          "Lately, I've been",
          "I've been losing sleep",
          "Dreaming about the things that we could be",
          "But baby, I've been",
          "I've been praying hard",
          "Said, no more counting dollars",
          "We'll be, we'll be counting stars",
        ],
      },
      {
        verse: [
          "I feel the love and I feel it burn",
          "Down this river every turn",
          "Hope is our four-letter word",
          "Make that money, watch it burn",
        ],
      },
      {
        verse: [
          "Old, but I'm not that old",
          "Young, but I'm not that bold",
          "And I don't think the world is sold",
          "On just doing what we're told",
        ],
      },
      {
        verse: ["And I feel something so wrong", "By doing the right thing"],
      },
      {
        verse: [
          "I couldn't lie",
          "Couldn't lie, couldn't lie",
          "Everything that drowns me",
          "Makes me wanna fly",
        ],
      },
      {
        verse: [
          "Lately, I've been",
          "I've been losing sleep",
          "Dreaming about the things that we could be",
          "But baby, I've been",
          "I've been praying hard",
          "Said, no more counting dollars",
          "We'll be counting stars",
        ],
      },
      {
        verse: [
          "Lately, I've been",
          "I've been losing sleep",
          "Dreaming about the things that we could be",
          "But baby, I've been",
          "I've been praying hard",
          "Said, no more counting dollars",
          "We'll be, we'll be counting stars",
        ],
      },
      {
        verse: [
          "Oh, take that money, watch it burn",
          "Sink in the river the lessons I've learned",
          "Take that money, watch it burn",
          "Sink in the river the lessons I've learned",
        ],
      },
      {
        verse: [
          "Take that money, watch it burn",
          "Sink in the river the lessons I've learned",
          "Take that money, watch it burn",
          "Sink in the river the lessons I've learned",
        ],
      },
      { verse: ["Everything that kills me", "Makes me feel alive"] },
      {
        verse: [
          "Lately, I've been",
          "I've been losing sleep",
          "Dreaming about the things that we could be",
          "But baby, I've been",
          "I've been praying hard",
          "Said, no more counting dollars",
          "We'll be counting stars",
        ],
      },
      {
        verse: [
          "Lately, I've been",
          "I've been losing sleep",
          "Dreaming about the things that we could be",
          "But baby, I've been",
          "I've been praying hard",
          "Said, no more counting dollars",
          "We'll be, we'll be counting stars",
        ],
      },
      {
        verse: [
          "Take that money, watch it burn",
          "Sink in the river the lessons I've learned",
          "Take that money, watch it burn",
          "Sink in the river the lessons I've learned",
        ],
      },
      {
        verse: [
          "Take that money, watch it burn",
          "Sink in the river the lessons I've learned",
          "Take that money, watch it burn",
          "Sink in the river the lessons I've learned",
        ],
      },
    ],
    cover: "https://i1.sndcdn.com/artworks-000083145415-4y8mqy-t500x500.jpg",
  },
  {
    id: 30,
    title: "O Fly On",
    artist: "Chr1s, Josiah Nichols",
    description:
      "O Fly On is a soulful acoustic track by Chr1s featuring Josiah Nichols. Released in 2022, it combines heartfelt lyrics with beautiful harmonies, creating a soothing and introspective listening experience.",
    url: oFlyOn,
    lyrics: [
      { verse: ["A flock of birds", "Hovering above"] },
      {
        verse: [
          "Just a flock of birds",
          "That's how you think of love",
          "And I always",
          "Look up to the sky",
          "Pray before the dawn",
          "'Cause they fly always",
        ],
      },
      { verse: ["Sometimes they arrive", "Sometimes they are gone"] },
      { verse: ["They fly on"] },
      {
        verse: [
          "A flock of birds",
          "Hovering above",
          "Into smoke I'm turned and rise",
        ],
      },
      {
        verse: [
          "Following them up",
          "Still I always",
          "Look up to the sky",
          "Pray before the dawn",
          "'Cause they fly always",
        ],
      },
      { verse: ["One minute they arrive", "Next you know they're gone"] },
      { verse: ["They fly on", "Fly on"] },
      {
        verse: [
          "Ohhh so fly on, ride through",
          "Maybe one day I'll fly next to you",
          "Fly on, ride through",
          "Maybe one day I can fly with you",
        ],
      },
      { verse: ["Fly on", "Fly on", "Fly on"] },
    ],
    cover:
      "https://geo-media.beatsource.com/image_size/500x500/f/a/f/faf201e8-5a67-4bd1-bc85-07f8bb077151.jpg",
  },
  {
    id: 31,
    title: "Deep Down",
    artist: "Alok, Ella Eyre",
    description:
      "Deep Down is an infectious dance-pop collaboration between Alok and Ella Eyre. Released in 2021, it features catchy hooks, energetic beats, and powerful vocals, making it a perfect track for the dancefloor.",
    url: deepDown,
    lyrics: [
      {
        verse: [
          "(Street sounds swirling through my mind)",
          "(Street sounds swirling through my mind)",
        ],
      },
      {
        verse: [
          "I can get down, I can get lonely",
          "Every time I think about the highs, yeah",
          "Messed me around and now you keep callin'",
          "Wonderin' if you can make it right",
        ],
      },
      {
        verse: [
          "I told you it's the end for you and I",
          "Swear this time we're through, but it's a lie",
          "When you call my name, yeah, ooh, yeah",
          "It sounds so right, so right, so right",
        ],
      },
      {
        verse: [
          "Deep down, wishing you were mine",
          "Deep down, miss you all the time",
          "Dream 'bout what we could've been if we tried",
          "Oh, but deep down, wishing you were mine, were mine",
        ],
      },
      {
        verse: [
          "Deep down, you got me so",
          "Deep down, I wanna go",
          "Deep down, you got me so, yeah",
          "Deep down, you got me so",
          "Deep down, I wanna go",
          "Deep down, you got me so, yeah",
        ],
      },
      { verse: ["Yeah"] },
      {
        verse: [
          "Need to be strong",
          "As soon as I see ya, you can turn my tables back around",
          "So easy",
          "You got the control",
          "Just hearin' you speak just gets me kinda crazy",
          "Kinda foolish, foolish, yeah",
        ],
      },
      {
        verse: [
          "I told you it's the end for you and I",
          "Swear this time we're through, but it's a lie",
          "When you call my name, yeah, ooh, yeah",
          "It sounds so right, so right, so right",
        ],
      },
      {
        verse: [
          "Deep down, wishing you were mine",
          "Deep down, miss you all the time",
          "Dream 'bout what we could've been if we tried",
          "Oh, but deep down, wishing you were mine, were mine",
        ],
      },
      {
        verse: [
          "Deep down, miss you all the time",
          "Dream 'bout what we could've been if we tried",
          "Oh, 'cause deep down, wishing you were mine, were mine",
        ],
      },
      { verse: ["Deep down, you got me so"] },
      {
        verse: [
          "Deep down, wishing you were mine",
          "Deep down, miss you all the time",
          "Dream 'bout what we could've been if we tried",
          "Oh, but deep down, wishing you were mine, were mine",
        ],
      },
      {
        verse: [
          "(Street sounds swirling through my mind) you got me so",
          "(Street sounds swirling through my mind) I wanna go",
          "(Street sounds swirling through my mind) you got me so",
          "(Street sounds swirling through my mind)",
        ],
      },
    ],
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/43402430bf3ac81e442c287277ded4c8/264x264-000000-80-0-0.jpg",
  },
  {
    id: 32,
    title: "Baby One More Time",
    artist: "Britney Spears",
    description:
      "Baby One More Time is a pop classic by Britney Spears. Released in 1998, it became an instant hit and solidified Spears' status as a pop icon, with its catchy chorus and iconic music video.",
    url: babyOneMoreTime,
    lyrics: [
      { verse: ["(Oh, baby, baby)", "(Oh, baby, baby)"] },
      {
        verse: [
          "Oh, baby, baby",
          "How was I supposed to know",
          "That something wasn't right here?",
        ],
      },
      {
        verse: [
          "Oh, baby, baby",
          "I shouldn't have let you go",
          "And now you're out of sight, yeah",
        ],
      },
      {
        verse: [
          "Show me how you want it to be",
          "Tell me, baby, 'cause I need to know now",
          "Oh, because",
        ],
      },
      {
        verse: [
          "My loneliness is killing me (and I)",
          "I must confess, I still believe (still believe)",
          "When I'm not with you, I lose my mind",
          "Give me a sign",
          "Hit me, baby, one more time",
        ],
      },
      {
        verse: [
          "Oh, baby, baby",
          "The reason I breathe is you",
          "Boy, you got me blinded",
        ],
      },
      {
        verse: [
          "Oh, pretty baby",
          "There's nothing that I wouldn't do",
          "That's not the way I planned it",
        ],
      },
      {
        verse: [
          "Show me how you want it to be",
          "Tell me, baby, 'cause I need to know now",
          "Oh, because",
        ],
      },
      {
        verse: [
          "My loneliness is killing me (and I)",
          "I must confess, I still believe (still believe)",
          "When I'm not with you, I lose my mind",
          "Give me a sign",
          "Hit me, baby, one more time",
        ],
      },
      { verse: ["(Oh, baby, baby)", "Oh (oh, baby, baby) yeah"] },
      {
        verse: [
          "Oh, baby, baby",
          "How was I supposed to know?",
          "Oh, pretty baby",
          "I shouldn't have let you go",
        ],
      },
      {
        verse: [
          "I must confess",
          "That my loneliness",
          "Is killing me now",
          "Don't you know I still believe?",
          "That you will be here",
          "And give me a sign",
          "Hit me, baby, one more time",
        ],
      },
      {
        verse: [
          "My loneliness is killing me (and I)",
          "I must confess, I still believe (still believe)",
          "When I'm not with you, I lose my mind",
          "Give me a sign",
          "Hit me, baby, one more time",
        ],
      },
      {
        verse: [
          "I must confess (my loneliness)",
          "That my loneliness (is killing me)",
          "Is killing me now (I must confess)",
          "Don't you know I still believe? (I still believe)",
          "That you will be here (when I'm not with you I lose my mind)",
          "And give me a sign",
          "Hit me, baby, one more time",
        ],
      },
    ],
    cover: "https://m.media-amazon.com/images/I/81tjVNc+-yL._AC_SX679_.jpg",
  },
  {
    id: 34,
    title: "A Thousand Years",
    artist: "James Arthur",
    description:
      "A Thousand Years is a heartfelt ballad by James Arthur. Originally released by Christina Perri, Arthur's rendition adds his soulful touch, creating a beautiful rendition of this romantic song.",
    url: aThousandYears,
    lyrics: [
      {
        verse: [
          "Heart beats fast",
          "Colors and promises",
          "How to be brave?",
          "How can I love when I'm",
          "Afraid to fall?",
          "Watching you stand alone",
          "All of my doubt",
          "Suddenly goes away somehow",
        ],
      },
      { verse: ["One step closer"] },
      {
        verse: [
          "I have died every night waiting for you",
          "Darling, don't be afraid, I have loved you",
          "For a thousand years",
          "I'll love you for a thousand more",
        ],
      },
      {
        verse: [
          "Time stands still",
          "Beauty in all she is",
          "I will be brave",
          "I will not let anything",
          "Take away",
          "What's standing in front of me",
          "Every breath",
          "Every hour has come to this",
        ],
      },
      { verse: ["One step closer"] },
      {
        verse: [
          "I have died evеry night waiting for you",
          "Darling, don't be afraid",
          "I have loved you for a thousand yеars",
          "I'll love you for a thousand more",
          "And all along I believed I would find you",
          "Time has brought your heart to me",
          "I have loved you for a thousand years",
          "I'll love you for a thousand more",
        ],
      },
      {
        verse: [
          "I love you",
          "I'll love you for a thousand",
          "I'll love you for a thousand years",
          "So in love",
          "So in love",
        ],
      },
      { verse: ["One step closer", "One step closer"] },
      {
        verse: [
          "I have died every day waiting for you",
          "Darling, don't be afraid",
          "I have loved you for a thousand years",
          "I'll love you for a thousand more",
          "And all along I believed I would find you",
          "Time has brought your heart to me",
          "I have loved you for a thousand years",
          "I'll love you for a thousand more",
        ],
      },
    ],
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/4a6bc53592ec08d5c17322eaf4418b9c/264x264-000000-80-0-0.jpg",
  },
  {
    id: 35,
    title: "Attention",
    artist: "Doja Cat",
    description:
      "Attention is a catchy pop track by Doja Cat. Released in 2021, it showcases Doja Cat's playful and confident style, with its infectious hooks and irresistible charm.",
    url: attention,
    lyrics: [
      {
        verse: [
          "Baby, if you like it, just reach out and pet it",
          "This one doesn't bite, it doesn't get aggressive",
          "Show you how to touch it, hold it like it's precious",
          "It don't need your lovin', it just needs attention",
          "Love me, it needs, it seeks affection (so sweet)",
          "Hungry, it fiends attention (help me)",
          "It needs, it seeks affection (baby)",
          "Hungry (yeah), it fiends (yeah)",
        ],
      },
      {
        verse: [
          "Look at me, look at me, you lookin'?",
          "My taste good, but I just had to redirect my cookin'",
          "I could've been an opener, I redirect the bookin'",
          "I read it all, the comments sayin': D, I'm really shooketh",
          "Do you need to see a therapist, is you lookin?",
          "Yes, the one I got, they really are the best",
          "Now I feel like I can see you bitches is depressed",
          "I am not afraid to finally say shit with my chest",
          "Lost a lil' weight, but I ain't never lost a tushy",
          "Lookin' good, but now my bald head match my",
          "Lookin' good, but now they all sayin' that I'm ugly",
          "Boo-hoo, my nigga, I ain't sad you won't fuck me",
          "I'm sad that you really thought your ass was above me",
          "You're lucky, 'cause I just paid your bill with a reply",
          "I just made your money pile knee high",
          "I just made your stats peak, now you got a blue check",
          "Now you can afford to go and reinstall a new wig",
          "Now you can afford to not be lousy, go and do shit",
          "Talk your shit about me, I can easily disprove it, it's stupid",
          "You follow me, but you don't really care about the music",
        ],
      },
      {
        verse: [
          "Baby, if you like it, just reach out and pet it",
          "This one doesn't bite, it doesn't get aggressive",
          "Show you how to touch it, hold it like it's precious",
          "It don't need your lovin', it just needs attention",
          "Love me, it needs, it seeks affection (so sweet)",
          "Hungry, it fiends attention (help me)",
          "It needs, it seeks affection (baby)",
          "Hungry, it fiends (yeah)",
        ],
      },
      {
        verse: [
          "Look at me, look at me, I'm naked",
          "Vulnerability earned me a lot of bacon",
          "I put a thong all in my ass and taught you how to shake it",
          "I paid all my respect to those who taught me how to make it",
          "And now I reap the benefits with no confrontation",
          "Y'all fall in the beef but that's another conversation",
          "I'm sorry, but we all find it really entertainin'",
          "'Cause we all wanna see them steppin' forward on their faces",
          "And we all wanna be the one that see the devastation",
          "Nothin' in it, but ain't the bad press good?",
          "The disrespect's real, how this Patek look?",
          "Pull out the checkbook, now why your neck crooked?",
          "I never learned a superstar from a textbook",
          "Talkin' 'bout she fallin' off, why she get booked?",
          "Man, I been humble, I'm tired of all the deprecation",
          "Just let me flex, bro, just let me pop shit?",
          "Why she think she Nicki M? She think she hot shit, hmm",
          "I never gave a F, go start a pod, bitch",
          "I got your head all in the dirt just like an ostrich",
          "Of course you bitches comparin' Doja to who the hottest",
        ],
      },
      {
        verse: [
          "Baby, if you like it, just reach out and pet it",
          "This one doesn't bite, it doesn't get aggressive",
          "Show you how to touch it, hold it like it's precious",
          "It don't need your lovin', it just needs attention",
          "Love me, it needs, it seeks affection (so sweet)",
          "Hungry, it fiends attention (help me)",
          "It needs, it seeks affection (baby)",
          "Hungry, it fiends",
        ],
      },
      { verse: ["Okay, cute"] },
    ],
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Doja_Cat_-_Attention.png/220px-Doja_Cat_-_Attention.png",
  },
  {
    id: 37,
    title: "What It Is",
    artist: "Doechii",
    description:
      "What It Is is a captivating hip-hop track by Doechii. Released in 2021, it showcases Doechii's unique style, combining confident verses with melodic hooks, and serves as an introduction to her artistry.",
    url: whatItIs,
    lyrics: [
      {
        verse: [
          "What it is, ho? What's up?",
          "Every good girl needs a little thug",
          "Every block boy needs a little love",
          "If you put it down, I'ma pick it up, up, up",
        ],
      },
      {
        verse: [
          "Can't you just see, it's just me and you?",
          "Panoramic view, that's my point of view, bae",
          "All about me, that's the energy",
          "That's that lemon pepper thing, I'm a ten-piece, baby",
        ],
      },
      {
        verse: [
          "Bedroom bully in the bando",
          "He gon' make it flip, do it with no handles",
          "Never switchin' sides, only switchin' angles",
          "Ooh, we go crazy like Rambo",
        ],
      },
      {
        verse: [
          "What it is, ho? (What it is?) What's up? (What's up?)",
          "Every good girl needs a little thug (Thug)",
          "Every block boy needs a little love (Love)",
          "If you put it down, I'ma pick it up, up (Ayy), up (Ayy)",
          "What it is, ho? (What it is?) What's up? (What's up?)",
          "Every good girl needs a little thug (Thug)",
          "Every block boy needs a little love (Love)",
          "If you put it down, I'ma pick it up, up (Ayy), up (Ayy)",
          "You might also like",
          "Mahal Pa Rin Kita",
          "Rockstar",
          "Hits Different",
          "Taylor Swift",
          "GENTO",
          "SB19",
        ],
      },
      {
        verse: [
          "Hit 'еm up, hit 'em up",
          "In the truck, got it tucked",
          "Hе get it up, like it's stuck",
          "All night, I like",
          "You ain't gotta say it when you know it's on site",
        ],
      },
      {
        verse: [
          "Bedroom bully in the bando",
          "He gon' make it flip, do it with no handles",
          "Never switchin' sides, only switchin' angles",
          "Ooh, we go crazy like Rambo",
        ],
      },
      {
        verse: [
          "What it is, ho? (What it is?) What's up? (What's up?)",
          "Every good girl needs a little thug (Thug)",
          "Every block boy needs a little love (Love)",
          "If you put it down, I'ma pick it up, up (Ayy), up (Ayy)",
          "What it is, ho? (What it is?) What's up? (What's up?)",
          "Every good girl needs a little thug (Thug)",
          "Every block boy needs a little love (Love)",
          "If you put it down, I'ma pick it up, up (Ayy), up (Ayy)",
        ],
      },
      {
        verse: [
          "I don't care if you run the streets",
          "Long as you comin' home to me",
          "I love the way you walk and the way you speak",
          "He gon' keep it real, that's the deal, that's the reason that I speed down, down (Down, down, down, down)",
          "I put that all on my name (All on my name)",
          "Yeah, that's an even exchange (Tell me what it is)",
          "Stay on your deal, we gon' tell 'em, we gon' tell 'em what, babe",
          "[Chorus: Doechii]",
          "What it is, ho? (What it is?) What's up?",
          "Every good girl needs a little thug (Needs a little thug)",
          "Every block boy needs a little love (Needs a little love, yeah)",
          "If you put it down, I'ma pick it up, up, up",
          "What it is, ho? What's up?",
          "Every good girl needs a little thug (Needs a little love)",
          "Every block boy needs a little love (Needs a little love, thug)",
          "If you put it down, I'ma pick it up, up (Ayy), up (Ayy)",
        ],
      },
      {
        verse: [
          "Back it up and do, and do it like that, yeah (What it is? What's up?)",
          "Back it up and do it like that, yeah (Ho)",
          "Back it up, back it and do it like that, yeah",
          "Back it up gon' and do it like that, yeah (Woo)",
          "Hey, what it is? Hey, what's up?",
          "J. White Did It (Yup, yup)",
          "More is on the way (Yup, yup, yeah)",
          "We need a lil' love, you know what I mean? (Yeah, ayy-ayy, woo)",
          "Ride out, woah",
        ],
      },
    ],
    cover:
      "https://t2.genius.com/unsafe/442x0/https%3A%2F%2Fimages.genius.com%2Ffe8b02df38c67279e5a3781c6d4207c0.1000x1000x1.png",
  },
  {
    id: 38,
    title: "See You Again",
    artist: "Wiz Khalifa ft. Charlie Puth",
    description:
      "See You Again is a heartfelt tribute song from the soundtrack of the movie 'Furious 7'. It was released in 2015 as a collaboration between Wiz Khalifa and Charlie Puth. The song pays homage to the late actor Paul Walker and captures the emotions of love, loss, and remembrance. With its touching lyrics and soulful melodies, See You Again became a global hit and a symbol of eternal friendship.",
    url: seeYouAgain,
    lyrics: [
      {
        verse: [
          "It's been a long day without you, my friend",
          "And I'll tell you all about it when I see you again",
          "We've come a long way from where we began",
          "Oh, I'll tell you all about it when I see you again",
          "When I see you again",
        ],
      },
      {
        verse: [
          "Damn, who knew?",
          "All the planes we flew",
          "Good things we've been through",
          "That I'd be standing right here talking to you",
          "'Bout another path",
          "I know we loved to hit the road and laugh",
          "But something told me that it wouldn't last",
          "Had to switch up",
          "Look at things different, see the bigger picture",
          "Those were the days",
          "Hard work forever pays",
          "Now I see you in a better place (see you in a better place)",
        ],
      },
      {
        verse: [
          "Uh",
          "How can we not talk about family",
          "When family's all that we got?",
          "Everything I went through",
          "You were standing there by my side",
          "And now you gon' be with me for the last ride",
        ],
      },
      {
        verse: [
          "It's been a long day without you, my friend",
          "And I'll tell you all about it when I see you again",
          "We've come a long way from where we began",
          "Oh, I'll tell you all about it when I see you again",
          "When I see you again",
        ],
      },
      { verse: ["Ooh, ooh, ooh, ooh, ooh, ooh"] },
      {
        verse: [
          "First, you both go out your way",
          "And the vibe is feeling strong",
          "And what's small turn to a friendship",
          "A friendship turn to a bond",
          "And that bond will never be broken",
          "The love will never get lost",
        ],
      },
      {
        verse: [
          "And when brotherhood come first",
          "Then the line will never be crossed",
          "Established it on our own",
          "When that line had to be drawn",
          "And that line is what we reached",
          "So remember me when I'm gone",
        ],
      },
      {
        verse: [
          "How can we not talk about family",
          "When family's all that we got?",
          "Everything I went through",
          "You were standing there by my side",
          "And now you gon' be with me for the last ride",
        ],
      },
      {
        verse: [
          "So let the light guide your way, yeah",
          "Hold every memory as you go",
          "And every road you take",
          "Will always lead you home",
          "Home",
        ],
      },
      {
        verse: [
          "It's been a long day without you, my friend",
          "And I'll tell you all about it when I see you again",
          "We've come a long way from where we began",
          "Oh, I'll tell you all about it when I see you again",
          "When I see you again",
        ],
      },
      {
        verse: [
          "Ooh, ooh, ooh, ooh, ooh, ooh",
          "When I see you again",
          "See you again",
          "When I see you again",
        ],
      },
    ],
    cover: "https://i1.sndcdn.com/artworks-000122391599-7v21wf-t500x500.jpg",
  },
  {
    id: 39,
    title: "Dance The Night",
    artist: "Dua Lipa",
    description:
      "Dance The Night is an infectious pop-dance track by Dua Lipa. Released in 2020, it combines catchy hooks, vibrant beats, and Dua Lipa's confident vocals, creating a perfect anthem for the dancefloor.",
    url: danceTheNight,
    lyrics: [
      {
        verse: [
          "Baby, you can find me under the lights",
          "Diamonds under my eyes",
          "Turn the rhythm up, don't you wanna just",
          "Come along for the ride?",
        ],
      },
      {
        verse: [
          "Pull my outfits up tight",
          "You can see my heartbeat tonight",
          "I can take the heat, baby, best believe",
          "That's the moment I shine",
        ],
      },
      {
        verse: [
          "'Cause every romance shakes and it bends",
          "Don't give a damn",
          "When the night's here, I don't do tears",
          "Baby, no chance",
        ],
      },
      { verse: ["I could dance, I could dance, I could dance"] },
      {
        verse: [
          "Watch me dance",
          "Dance the night away",
          "My heart could be burning, but you won't see it on my face",
          "Watch me dance",
          "Dance the night away",
          "I still keep the party running, not one hair out of place",
        ],
      },
      {
        verse: [
          "Lately, I've been moving close to the edge",
          "Still be looking my best",
          "I stay on the beat, you can count on me",
          "I ain't missing no steps",
        ],
      },
      {
        verse: [
          "'Cause every romance shakes and it bends",
          "Don't give a damn",
          "When the night's here, I don't do tears",
          "Baby, no chance",
        ],
      },
      { verse: ["I could dance, I could dance, I could dance"] },
      {
        verse: [
          "Watch me dance",
          "Dance the night away",
          "My heart could be burning, but you won't see it on my face",
          "Watch me dance (dance)",
          "Dance the night away (uh-huh)",
          "I still keep the party running, not one hair out of place",
        ],
      },
      {
        verse: [
          "When my heart breaks (they'll never see it, never see it)",
          "When my world shakes (I feel alive, I feel alive)",
          "I don't play it safe (ooh)",
          "Don't you know about me? (Uh-huh)",
        ],
      },
      { verse: ["I could dance, I could dance, I could dance"] },
      {
        verse: [
          "Even when the tears are flowing like diamonds on my face",
          "I still keep the party going, not one hair out of place (yes, I can)",
          "Even when the tears are flowing like diamonds on my face (yes, I can, yes, I can)",
          "I still keep the party going, not one hair out of place",
        ],
      },
      {
        verse: [
          "Watch me dance",
          "Dance the night away (uh-huh)",
          "My heart could be burning, but you won't see it on my face",
          "Watch me (dance) dance",
          "Dance the night away (uh-huh)",
          "I still keep the party running, not one hair out of place",
        ],
      },
      {
        verse: [
          "When my heart breaks (they'll never see it, never see it)",
          "When my world shakes (I feel alive, I feel alive)",
          "I don't play it safe (ooh)",
          "Don't you know about me? (Uh-huh)",
        ],
      },
      {
        verse: [
          "I could dance, I could dance, I could dance",
          "Dance the night",
        ],
      },
    ],
    cover: "https://f4.bcbits.com/img/a2063368833_10.jpg",
  },
  {
    id: 40,
    title: "Last Night",
    artist: "Morgan Wallen",
    description:
      "Last Night is a country-pop song by Morgan Wallen. Released in 2022, it captures the excitement and nostalgia of a memorable night out, blending catchy melodies with Wallen's smooth vocals.",
    url: lastNight,
    lyrics: [
      {
        verse: [
          "Last night we let the liquor talk",
          "I can't remember everything we said, but we said it all",
          "You told me that you wish I was somebody you never met",
          "But baby, baby somethin's tellin' me this ain't over yet",
          "No way it was our last night",
        ],
      },
      {
        verse: [
          "I kiss your lips",
          "Make you grip the sheets with your fingertips",
          "Last bottle of Jack we split a fifth",
          "Just talk about life goin' sip for sip",
          "You, you know you love to fight",
          "And I say shit I don't mean",
          "But I'm still gon' wake up wantin' you and me",
        ],
      },
      {
        verse: [
          "I know that last night we let the liquor talk",
          "I can't remember everything we said, but we said it all",
          "You told me that you wish I was somebody you never met",
          "But baby, baby somethin's tellin' me this ain't over yet",
          "No way it was our last night",
          "No way it was our last night",
        ],
      },
      {
        verse: [
          "No way it was the last night that we break up",
          "I see your tail lights in the dust",
          "You call your momma, I call your bluff",
          "In the middle of the night, pull it right back up",
          "Yeah my, my friends say let her go",
          "Your friends say: What the hell",
          "I wouldn't trade your kind of love for nothin' else",
        ],
      },
      {
        verse: [
          "Oh baby, last night we let the liquor talk",
          "I can't remember everything we said, but we said it all",
          "You told me that you wish I was somebody you never met",
          "But baby, baby somethin's tellin' me this ain't over yet",
        ],
      },
      {
        verse: [
          "No way it was our last night, we said we'd had enough",
          "I can’t remember everything we said, but we said too much",
          "I know you packed your shit and slammed the door right before you left",
          "But baby, baby somethin’s tellin’ me this ain’t over yet",
          "No way it was our last night",
          "No way it was our last night",
        ],
      },
      {
        verse: [
          "I know you said this time you really weren’t coming back again",
          "But baby, baby somethin’s tellin’ me this ain’t over yet",
          "No way it was our last night",
          "No way it was our last night",
        ],
      },
    ],
    cover: "https://i1.sndcdn.com/artworks-zrtaeaesfp26-0-t500x500.jpg",
  },
  {
    id: 41,
    title: "Say Yes To Heaven",
    artist: "Lana Del Rey",
    description:
      "Say Yes To Heaven is a dreamy pop ballad by Lana Del Rey. Released in 2017, it showcases Del Rey's ethereal vocals and poetic lyrics, creating a mesmerizing and introspective listening experience.",
    url: sayYesToHeaven,
    lyrics: [
      {
        verse: [
          "If you dance, I'll dance",
          "And if you don't, I'll dance anyway",
          "Give peace a chance",
          "Let the fear you have fall away",
        ],
      },
      { verse: ["I've got my eye on you", "I've got my eye on you"] },
      {
        verse: [
          "Say yes to heaven",
          "Say yes to me",
          "Say yes to heaven",
          "Say yes to me",
        ],
      },
      {
        verse: [
          "If you go, I'll stay",
          "You come back, I'll be right here",
          "Like a barge at sea",
          "In the storm, I stay clear",
        ],
      },
      {
        verse: ["'Cause I've got my mind on you", "I've got my mind on you"],
      },
      {
        verse: [
          "Say yes to heaven",
          "Say yes to me",
          "Say yes to heaven",
          "Say yes to me",
        ],
      },
      {
        verse: [
          "If you dance, I'll dance",
          "I'll put my red dress on again",
          "And if you fight, I'll fight",
          "It doesn't matter, now it's all gone",
        ],
      },
      { verse: ["I've got my mind on you", "I've got my mind on you"] },
      {
        verse: [
          "Say yes to heaven",
          "Say yes to me",
          "Say yes to heaven",
          "Say yes to me",
        ],
      },
      {
        verse: [
          "I've got my eye on you",
          "I've got my eye on you, mmm",
          "I've got my eye on you",
          "I've got my mind on you",
        ],
      },
    ],
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/5/51/Lana_Del_Rey_-_Say_Yes_to_Heaven.png",
  },
  {
    id: 42,
    title: "What U Want",
    artist: "Mark Mendy, Jordan Rys, LEØN",
    description:
      "What U Want is an infectious pop collaboration between Mark Mendy, Jordan Rys, and LEØN. Released in 2022, it combines catchy melodies, energetic beats, and captivating vocals, creating a feel-good summer anthem.",
    url: whatUWant,
    lyrics: [
      {
        verse: [
          "Back and forth",
          "Bite my tongue",
          "Still don’t know",
          "What you want",
          "Break my back",
          "Shed my blood",
          "And I still don’t know what you want",
        ],
      },
      {
        verse: [
          "You fuss and fighting over every little detail",
          "When you got problems you go fix ‘em up with retail",
          "Girl read the signs yeah sometimes you can’t see clear",
          "If only I knew what you want",
        ],
      },
      {
        verse: [
          "Back and forth",
          "Bite my tongue",
          "Still don’t know",
          "What you want",
          "Break my back",
          "Shed my blood",
          "And I still don’t know what you want",
        ],
      },
      {
        verse: [
          "Argue all day then later wanna go and make love",
          "We don’t watch movies ‘cause you make it hard to pick one",
          "Could never figure out how you wanted your hair done",
          "If only you knew what you want",
          "You might also like",
          "Superman",
          "Eminem",
          "FIFTY FIFTY - Cupid (English Translation)",
          "Genius English Translations",
          "Push Up",
          "Creeds",
          "Back and forth",
          "Bite my tongue",
          "Still don’t know",
          "What you want",
          "Break my back",
          "Shed my blood",
          "And I still don’t know what you want",
        ],
      },
      {
        verse: [
          "I still hold on",
          "I still hold on",
          "With you acting up",
          "And I still don’t know what you want",
        ],
      },
      {
        verse: [
          "You’re good at make-up but can’t make up your mind",
          "Uh, girl you know",
          "You switch your attitude just like you switch sides",
          "It drives me wild",
        ],
      },
      {
        verse: [
          "Back and forth",
          "Bite my tongue",
          "Still don’t know",
          "What you want",
          "Break my back",
          "Shed my blood",
          "And I still don’t know what you want",
          "Back and forth",
          "Bite my tongue",
          "Still don’t know",
          "What you want",
          "Break my back",
          "Shed my blood",
          "And I still don’t know what you want",
          "I still hold on",
          "I still hold on",
          "With you acting up",
          "And I still don’t know what you want",
        ],
      },
    ],
    cover:
      "https://i1.sndcdn.com/artworks-ptSCEsHqtx71LQxm-A4eGsg-t500x500.jpg",
  },
  {
    id: 43,
    title: "That's My Girl",
    artist: "Fifth Harmony",
    description:
      "That's My Girl is an empowering pop track by Fifth Harmony. Released in 2016, it features energetic beats, powerful vocals, and lyrics that celebrate female strength and unity.",
    url: thatsMyGirl,
    lyrics: [
      { verse: ["(That's my girl)"] },
      {
        verse: [
          "Yeah, who's been working so damn hard",
          "You got that head on overload?",
          "Got yourself this flawless body",
          "Aching now from head to toe",
        ],
      },
      {
        verse: [
          "Ain't nothing, ain't nothing",
          "All my ladies 'round the world",
          "Ain't nothing, ain't nothing",
          "Good girls better get bad",
        ],
      },
      {
        verse: [
          "You've been down before",
          "You've been hurt before",
          "You got up before",
          "You'll be good to go, good to go",
        ],
      },
      {
        verse: [
          "Destiny said it: You got to get up and get it",
          "Get mad independent and don't you ever forget it",
          "Got some dirt on your shoulder, then let me brush it off for ya",
          "If you're feeling me, put your five high",
          "That's my girl",
        ],
      },
      {
        verse: [
          "That's my girl",
          "That's my girl",
          "That's my girl",
          "Get up, what you waiting for?",
          "That's my girl",
          "That's my girl",
          "That's my girl",
        ],
      },
      { verse: ["(That's my girl)", "Oh, oh"] },
      {
        verse: [
          "Nod if you been played by every boo",
          "Just tryna show you off",
          "Thought he was the best you ever had",
          "Until he cut you off",
        ],
      },
      {
        verse: [
          "Ain't nothing, ain't nothing",
          "Bet you bet you know your worth",
          "Ain't nothing, ain't nothing",
          "Good girls better get bad",
        ],
      },
      {
        verse: [
          "You've been down before",
          "You've been hurt before",
          "You got up before",
          "You'll be good to go, good to go",
        ],
      },
      {
        verse: [
          "Destiny said it: You got to get up and get it (get up and get it)",
          "Get mad independent and don't you ever forget it (don't you ever forget it)",
          "Got some dirt on your shoulder, then let me brush it off for ya",
          "If you're feeling me, put your five high",
          "That's my girl",
        ],
      },
      {
        verse: [
          "That's my girl",
          "That's my girl",
          "That's my girl",
          "What you wait—, what you wait—",
          "What you waiting for? (Oh, oh)",
          "That's my girl (oh, oh)",
          "That's my girl (oh, oh)",
          "That's my girl",
        ],
      },
      {
        verse: [
          "You've been down before",
          "You've been hurt before",
          "You got up before",
          "You'll be good to go, good to go",
          "(Don't ever give up, no, no)",
        ],
      },
      {
        verse: [
          "Destiny said it: You got to get up and get it",
          "Get mad independent and don't you ever forget it",
          "Got some dirt on your shoulder, then let me brush it off for ya",
          "If you're feeling me, put your five high",
          "That's my girl",
        ],
      },
      {
        verse: [
          "That's my girl",
          "That's my girl",
          "That's my girl",
          "What you wait—, what you wait—",
          "What you waiting for? (Oh, oh)",
          "That's my girl (oh, oh)",
          "That's my girl (oh, oh)",
          "That's my girl",
          "(That's my girl, that's my girl, that's my girl)",
        ],
      },
      {
        verse: [
          "Ain't nothing, ain't nothing, ain't nothing",
          "Put your heart and your soul in it",
          "Ain't nothing, ain't nothing, ain't nothing",
          "Put your heart and your soul in it",
        ],
      },
      {
        verse: [
          "(Oh, oh)",
          "That's my girl (oh, oh)",
          "That's my girl (oh, oh)",
          "That's my girl",
        ],
      },
      {
        verse: [
          "That's my girl",
          "That's my girl",
          "That's my girl",
          "That's my girl",
          "That's my girl",
        ],
      },
    ],
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/b/b2/Fifth_Harmony_-_That%27s_My_Girl.png",
  },
  {
    id: 44,
    title: "All My Life",
    artist: "Lil Durk",
    description:
      "All My Life is a heartfelt hip-hop track by Lil Durk. Released in 2022, it delves into Durk's personal experiences and reflections, showcasing his emotional depth and introspective storytelling.",
    url: allMyLife,
    lyrics: [
      {
        verse: [
          "Durkio told me he been on some positive shit, yeah, yeah",
          "Lately, I just wanna show up and body some shit, yeah, yeah",
          "Always been a lil' mathematician, lately, it's cash I'm gettin'",
          "Got me losin' count of these bags, I've been movin' too fast",
          "Hard times don't last, 'member when cops harassed",
          "Talkin' out my ass, boy, you ain't shit but a bitch with a badge",
        ],
      },
      {
        verse: [
          "All my life (all my life)",
          "They been tryin' to keep me down (they been tryna keep me down)",
          "All this time (all this time)",
          "Never thought I would make it out (never thought I'd make it out)",
          "They couldn't break me, they couldn't break me (no, no)",
          "They couldn't take me, they couldn't take me (no)",
          "All my life (all my life)",
          "They been tryin' to keep me down (they been tryna keep me down)",
        ],
      },
      {
        verse: [
          "I decided I had to finish",
          "But the media called me a menace",
          "I done sat with the mayor and politicians, I'm tryna change the image",
          "You can't blame my past no more, I come from the trenches",
          "Some said I'd never be a superstar, but I know I'm different (no, no, no)",
          "I'm The Voice, but the system ain't give me a choice",
          "Know some people that's still unemployed",
          "I know a felon who tryna get FOID",
          "Child support your only support",
          "For a visit, I'm goin' through courts",
          "Went to jail, they was chainin' me up",
          "And you know that I'm famous as fuck",
          "See how you gon' joke about stimulus",
          "But they really had came in the clutch",
          "I know some kids wanna hurt theyself",
          "Stop tryna take drugs, I refer to myself",
          "Tryna better myself, tryna better my health, but",
        ],
      },
      {
        verse: [
          "All my life (all my life)",
          "They been tryin' to keep me down (they been tryna keep me down)",
          "All this time (all this time)",
          "Never thought I would make it out (never thought I'd make it out)",
          "They couldn't break me, they couldn't break me (no, no)",
          "They couldn't take me, they couldn't take me (no)",
          "All my life (all my life)",
          "They been tryin' to keep me down (yeah) (they been tryna keep me down)",
        ],
      },
      {
        verse: [
          "First-generation ghetto nigga",
          "Cole World, hello, niggas",
          "Made it out the city with my head on straight",
          "Niggas keep shootin' up the lead out",
          "Young Jordan Peele, gotta get out",
          "And the shit that I spit out",
          "Is a cheat code like I'm facin' a RICO",
          "And how a nigga put a hit out",
          "And another one, and, and another one",
          "I got like a hundred of 'em",
          "'Bout to lap niggas, so they think they ahead of me",
          "But I'm really in front of them",
          "Now some of them fumblin' they bags",
          "Fuckin' up the little crumbs that they had",
          "A reminder to humble yourself",
          "This shit could be gone in an instant",
          "Me, I'm runnin' long distance, all pistons firin'",
          "I been stuck between maybe retirin'",
          "And feelin' like I'm just not hittin' my prime",
          "These days seein' rappers be dyin'",
          "Way before they even gettin' they shine",
          "I never even heard of lil' buddy",
          "Till somebody murdered lil' buddy",
          "Now I'm on the phone, searchin' lil' buddy name",
          "Got to playin' his tunes",
          "All day in my room, thinkin': Damn",
          "This shit wicked, to get they names buzzin'",
          "Some niggas just gotta go lay in a tomb",
          "And media thirsty for clicks",
          "I got a new rule",
          "If you ain't never posted a rapper when he was alive",
          "You can't post about him after he get hit",
          "It's simple, it's the principle",
          "On any tempo, I'm invincible",
          "Don't even rap, I just vent to you",
          "I rather that than an interview most days",
          "Fuck 'em all like I'm goin' through a ho' phase",
          "Young nigga shoot out the whip like road rage",
          "I pray all of my dawgs stay so paid",
          "And the only thing that kill 'em is old age",
        ],
      },
      {
        verse: [
          "All my life (all my life)",
          "They been tryin' to keep me down (they been tryna keep me down)",
          "All this time (all this time)",
          "Never thought I would make it out (never thought I'd make it out)",
          "They couldn't break me, they couldn't break me (no, no)",
          "They couldn't take me, they couldn't take me (no)",
          "All my life (all my life)",
          "They been tryin' to keep me down (they been tryna keep me down)",
        ],
      },
    ],
    cover:
      "https://t2.genius.com/unsafe/601x0/https%3A%2F%2Fimages.genius.com%2F1d9d47a7b4e881ef85e906b51b9e1419.999x999x1.png",
  },
  {
    id: 45,
    title: "Always",
    artist: "Daniel Caesar",
    description:
      "Always is a soulful R&B track by Daniel Caesar. Released in 2017, it showcases Caesar's smooth vocals and heartfelt lyrics, capturing the emotions of love and devotion.",
    url: always,
    lyrics: [
      {
        verse: [
          "Baby, baby",
          "There will always be space for you and me",
          "Right where you left it",
          "And just maybe",
          "Enough time will pass",
          "We'll look back and laugh",
          "Just don't forget it",
        ],
      },
      {
        verse: [
          "And maybe I'm wrong",
          "For writing this song",
          "Losing my head over you",
        ],
      },
      {
        verse: [
          "And I'll be here",
          "'Cause we both know how it goes",
          "I don't want things to change",
          "I pray they stay the same, always",
          "And I don't care",
          "If you're with somebody else",
          "I'll give you time and space",
          "Just know I'm not a phase",
          "I'm always, ways, ways",
          "Always, ways, ways",
          "Always, ways, ways",
        ],
      },
      {
        verse: [
          "Pretty lady, used to walk with me",
          "Down bloor street, oh, what a time",
          "And I still remember the fuss and thе fight and the fuckin' the line",
          "So finе, you'll always be mine",
        ],
      },
      {
        verse: [
          "And maybe I'm wrong (hey, babe, you could)",
          "For writing this song (write me a song)",
          "Losing my head over you",
        ],
      },
      {
        verse: [
          "And I'll be here",
          "'Cause we both know how it goes",
          "I don't want things to change",
          "I pray they stay the same, always",
          "And I don't care",
          "If you're with somebody else",
          "I'll give you time and space",
          "Just know I'm not a phase",
          "I'm always, ways, ways",
          "Always, ways, ways",
          "Always, ways, ways",
        ],
      },
      {
        verse: [
          "Always, count unsure are the stars in the sky",
          "Always, you can on the sure that the Sun will rise",
          "Always, my love for you will go with no man",
          "Always, I will be here",
        ],
      },
    ],
    cover:
      "https://i1.sndcdn.com/artworks-xF0WP4tocxVIE1GR-Y0eQKg-t500x500.jpg",
  },
  {
    id: 46,
    title: "Everything",
    artist: "Lucas Larvenz",
    description:
      "Everything is a mesmerizing pop track by Lucas Larvenz. Released in 2022, it combines lush melodies, atmospheric production, and Larvenz's captivating vocals, creating a sonic journey that envelops the listener.",
    url: everything,
    lyrics: [
      {
        verse: [
          "We meet less than a week ago",
          "I want to see where we can go",
          "We try so hard to take it slow ",
          "But i’ve been yours since you said hello",
          "I already care I already know",
          "That your the first boy that’s felt like home",
          "Don’t think I can take it If you hit the brakes",
          "Tell you how I feel but I bet you know",
        ],
      },
      {
        verse: [
          "Fell in love at the first text ",
          "Been dreaming of you since we meet",
          "Looking for someone my type",
          "Someone to make me feel alright",
          "And baby I know it’s you",
          "I need this to last through June",
          "No this ain’t a summer fling",
          "To me you are everything",
        ],
      },
      {
        verse: [
          "I fall fast and then I get bored",
          "So I backtrack and they get ignored",
          "I’ve been waiting for someone so fascinating",
          "Someone I can be thankful for",
          "Everyday with you is a honeymoon ",
          "Didn’t know I’d feel so strong so soon",
          "The look in your eyes takes me to paradise",
          "And when you smile and you kiss me too ",
        ],
      },
      {
        verse: [
          "Fell in love at the first text ",
          "Been dreaming of you since we meet",
          "Looking for someone my type",
          "Someone to make me feel alright",
          "And baby I know it’s you",
          "I need this to last through June",
          "No this ain’t a summer fling",
          "To me you are everything",
        ],
      },
    ],
    cover: "https://i.scdn.co/image/ab67616d00001e021e4f3d3b4ccf54c2bb3c6d3d",
  },
  {
    id: 47,
    title: "Favorite Song",
    artist: "Toosii",
    description:
      "Favorite Song is an infectious hip-hop track by Toosii. Released in 2021, it combines catchy melodies, smooth flows, and relatable lyrics, making it a perfect choice for your playlist.",
    url: favoriteSong,
    lyrics: [
      {
        verse: [
          "But nobody's",
          "Gonna make you change what you probably",
          "Don't like anyway 'bout you darlin'",
          "So you might as well",
          "Hmm-mmm",
          "Be somebody",
          "Who can make you face what you're guardin'",
          "Open up the gates where your heart is",
          "And just be yourself (ADELSO on this)",
          "Yeah",
        ],
      },
      {
        verse: [
          "I'm on the stage right now, singin' your favorite song",
          "Look in the crowd, and you're nowhere to be found as they sing along",
          'I say, "You look good without no make-up, no lashes, even better when you wake up" (Oh, oh, oh)',
        ],
      },
      {
        verse: [
          "I see the look on your face, I see you're hidin' the hate",
          "I see you're lookin' for someone to scoop you right off of your feet",
          "You want to ride in the Wraith",
          "You want to go out on dates",
          "You want somebody to come bring you flowers",
          "Someone to talk to for hours",
          "Wash your back while y'all sit in the shower (Yeah)",
          "Someone to tell you you're beautiful",
          "Someone to tell you and mean it",
          `Someone to tell you, "I love you" everyday and don't got a reason`,
          "Talkin' 'bout someone to bring you peace (Uh)",
          "Someone to help you sleep (Yeah)",
          "Someone to pick you up when you're feelin' down, feelin' lonely",
        ],
      },
      {
        verse: [
          "Need somebody who can make it better",
          "Somebody who can open up those gates",
          "Open up those gates to your heart",
          "Only if you'll let me",
        ],
      },
      {
        verse: [
          "I'm on the stage right now, singin' your favorite song",
          "Look in the crowd, and you're nowhere to be found as they sing along",
          'I say, "You look good without no make-up, no lashes, even better when you wake up" (Oh, oh, oh)',
        ],
      },
      {
        verse: [
          "I see the look on your face, I see you're lookin' for peace",
          "I see you're tired of the hurt, tired of the pain, tired of the nights where you can't get no sleep",
          "I see you're tired thinkin' 'bout if he cheat",
          "See you tired thinkin' 'bout if you're leavin'",
          "See you tired of bein' so tired",
          "And you're damn sure ain't gettin' even",
        ],
      },
      {
        verse: [
          "Need somebody who can make it better",
          "Somebody who can open up those gates",
          "Open up those gates to your heart",
          "Only if you'll let me",
        ],
      },
      {
        verse: [
          "I'm on the stage right now, singin' your favorite song",
          "Look in the crowd, and you're nowhere to be found as they sing along",
          'I say, "You look good without no make-up, no lashes, even better when you wake up" (Oh, oh, oh)',
        ],
      },
      {
        verse: [
          "Gonna make you change what you probably",
          "Don't like anyway 'bout you darlin'",
          "So you might as well",
          "Be somebody",
          "Who can make you face what you're guardin'",
          "Open up the gates where your heart is",
          "And just be yourself",
          "Hmm",
        ],
      },
    ],
    cover:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Toosii_-_Favorite_Song.jpeg",
  },
  {
    id: 48,
    title: "Wish You The Best",
    artist: "Lewis Capaldi",
    description:
      "Wish You The Best is an emotional ballad by Lewis Capaldi. Released in 2019, it showcases Capaldi's powerful vocals and heartfelt lyrics, conveying the emotions of love and longing.",
    url: wishYouTheBest,
    lyrics: [
      {
        verse: [
          "I miss knowing what you're thinking",
          "And hearing how your day has been",
          "Do you think you could tell me everything, darling",
          "But leave out every part about him?",
          "Right now, you're probably by the ocean",
          "While I'm still out here in the rain",
          "With every day that passes by since we've spoken",
          "It's like Glasgow gets farther from LA",
        ],
      },
      { verse: ["Maybe it's supposed to be this way"] },
      {
        verse: [
          "But, oh, my love",
          "I wanna say: I miss the green in your eyes",
          "And when I said we could be friends, guess I lied",
          "I wanna say: I wish that you never left",
          "Oh, but instead: I only wish you the best",
        ],
      },
      {
        verse: [
          "I wanna say: Without you, everything's wrong",
          "And you were everything I need all along",
          "I wanna say: I wish that you never left",
          "Oh, but instead: I only wish you the best",
        ],
      },
      {
        verse: [
          "Well, I can't help but notice",
          "You seem happier than ever now",
          "And I guess that I should tell you: I'm sorry",
          "It seems I was the problem, somehow",
        ],
      },
      { verse: ["Maybe I only brought you down"] },
      {
        verse: [
          "But, oh, my love",
          "I wanna say: I miss the green in your eyes",
          "And when I said we could be friends, guess I lied",
          "I wanna say: I wish that you never left",
          "Oh, but instead: I only wish you the best",
        ],
      },
      {
        verse: [
          "I wanna say: Without you, everything's wrong",
          "And you were everything I need all along",
          "I wanna say: I wish that you never left",
          "Oh, but instead: I only wish you the best",
        ],
      },
      { verse: ["But, oh, my love", "Ooh", "Oh, my love", "Ooh"] },
      {
        verse: [
          "Wish I could say it's something I really mean",
          "But I want you happy whether or not it's with me",
          "I wanna say: I wish that you never left",
          "Oh, but instead: I only wish you the best",
        ],
      },
      {
        verse: [
          "I wanna say: Without you, everything's wrong",
          "And you were everything I need all along",
          "I wanna say: I wish that you never left",
          "Oh, but instead: I only wish you the best",
        ],
      },
    ],
    cover:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Lewis_Capaldi_-_Wish_You_the_Best.png",
  },
  {
    id: 49,
    title: "Wrong",
    artist: "Lucas Larvenz",
    description:
      "Wrong is a captivating pop track by Lucas Larvenz. Released in 2021, it explores the complexities of relationships and the struggle of finding one's place, with its catchy hooks and introspective lyrics.",
    url: wrong,
    lyrics: [
      {
        verse: [
          "Saturday and i’m all alone",
          "A quiet comfort of my four walls",
          "If I had it in me I would run to you",
          "But my body’s numb I swear it’s not you",
        ],
      },
      {
        verse: [
          "And you scream again blowing up my phone",
          "The constant fighting is getting old",
          "And you count my sins in yet another song",
          "But I swear to god you got it all wrong",
        ],
      },
      {
        verse: [
          "You got it all wrong",
          "You got it all wrong",
          "You got it all wrong",
        ],
      },
      {
        verse: [
          "I swear to god you got it all wrong",
          "You ask if there are others",
          "I say that I would never",
        ],
      },
      {
        verse: [
          "Cause sometimes even silence is too much of a companion",
          "And I swear that I love you",
          "Or at least I think that I do",
          "But I forgotten what it feels like",
          "To ever love myself too",
        ],
      },
      {
        verse: [
          "But one phone call and there goes all your trust",
          "And now all you see is ghost of my past",
          "Now all I hear is ticking of our clock ",
          "and the awful silence of your morbid thoughts",
        ],
      },
      {
        verse: [
          "You got it all wrong",
          "You got it all wrong",
          "You got it all wrong",
        ],
      },
      { verse: ["I swear to god you got it all wrong"] },
    ],
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/0495bc300c32b2bb9773ea912d77ff51/264x264-000000-80-0-0.jpg",
  },
  {
    id: 50,
    title: "So What",
    artist: "P!NK",
    description:
      "So What is an empowering pop-rock anthem by P!NK. Released in 2008, it features catchy melodies, energetic guitars, and P!NK's bold and rebellious attitude.",
    url: soWhat,
    lyrics: [
      {
        verse: [
          "Na-na-na-na-na-na-na",
          "Na-na-na-na-na-na",
          "Na-na-na-na-na-na-na",
          "Na-na-na-na-na-na",
        ],
      },
      {
        verse: [
          "I guess I just lost my husband",
          "I don't know where he went",
          "So I'm gonna drink my money",
          "I'm not gonna pay his rent (nope)",
        ],
      },
      {
        verse: [
          "I got a brand new attitude",
          "And I'm gonna wear it tonight",
          "I wanna get in trouble",
          "I wanna start a fight",
        ],
      },
      {
        verse: [
          "Na-na-na-na-na-na-na",
          "I wanna start a fight",
          "Na-na-na-na-na-na-na",
          "I wanna start a fight!",
        ],
      },
      {
        verse: [
          "So, so what?",
          "I'm still a rockstar",
          "I got my rock moves",
          "And I don't need you",
        ],
      },
      {
        verse: [
          "And guess what?",
          "I'm having more fun",
          "And now that we're done",
          "I'm gonna show you tonight",
          "I'm alright",
          "I'm just fine",
          "And you're a tool",
        ],
      },
      {
        verse: [
          "So, so what?",
          "I am a rockstar",
          "I got my rock moves",
          "And I don't want you tonight",
        ],
      },
      { verse: ["(Uh, check my flow, uh)"] },
      {
        verse: [
          "The waiter just took my table",
          "And gave it to Jessica Simps (shit)",
          "I guess I'll go sit with drum boy",
          "At least he'll know how to hit (oops)",
        ],
      },
      {
        verse: [
          "What if this song's on the radio?",
          "Then somebody's gonna die",
          "I'm gonna get in trouble",
          "My ex will start a fight",
        ],
      },
      {
        verse: [
          "Na-na-na-na-na-na-na",
          "He's gonna start a fight",
          "Na-na-na-na-na-na-na",
          "We're all gonna get in a fight!",
        ],
      },
      {
        verse: [
          "So, so what?",
          "I'm still a rockstar",
          "I got my rock moves",
          "And I don't need you",
        ],
      },
      {
        verse: [
          "And guess what?",
          "I'm having more fun",
          "And now that we're done",
          "I'm gonna show you tonight",
          "I'm alright (I'm alright)",
          "I'm just fine",
          "And you're a tool",
        ],
      },
      {
        verse: [
          "So, so what?",
          "I am a rockstar",
          "I got my rock moves",
          "And I don't want you tonight",
        ],
      },
      {
        verse: [
          "You weren't there",
          "You never were",
          "You want it all, but that's not fair",
        ],
      },
      {
        verse: [
          "I gave you life",
          "I gave my all",
          "You weren't there",
          "You let me fall",
        ],
      },
      {
        verse: [
          "So, so what?",
          "I'm still a rockstar",
          "I got my rock moves",
          "And I don't need you",
        ],
      },
      {
        verse: [
          "And guess what?",
          "I'm having more fun",
          "And now that we're done (we're done)",
          "I'm gonna show you tonight",
          "I'm alright (I'm alright)",
          "I'm just fine (I'm just fine)",
          "And you're a tool",
        ],
      },
      {
        verse: [
          "So, so what?",
          "I am a rockstar (oh)",
          "I got my rock moves",
          "And I don't want you tonight (I don't want you tonight)",
        ],
      },
      {
        verse: [
          "No, no",
          "No, no",
          "I don't want you tonight",
          "You weren't there",
        ],
      },
      {
        verse: [
          "I'm gonna show you tonight (I'm gonna show you tonight)",
          "I'm alright (I'm alright)",
          "I'm just fine",
          "And you're a tool",
        ],
      },
      {
        verse: [
          "So, so what?",
          "I am a rockstar",
          "I got my rock moves",
          "And I don't want you tonight (I don't want you tonight)",
        ],
      },
      { verse: ["Ba-da-da-da-da-da"] },
    ],
    cover: "https://upload.wikimedia.org/wikipedia/pt/f/f3/Pinksowhatcover.jpg",
  },
];

export default data;
