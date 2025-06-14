import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Modal } from 'react-native';

const EventData=[
    {
      "event": "India vs Australia ODI",
      "date": "2024-10-12",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "England vs Pakistan T20",
      "date": "2024-09-05",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "New Zealand vs South Africa Test",
      "date": "2025-01-15",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "Sri Lanka vs Bangladesh ODI",
      "date": "2024-08-20",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "India vs England Test",
      "date": "2024-12-26",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "Australia vs Pakistan T20",
      "date": "2025-02-02",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "West Indies vs India T20",
      "date": "2024-11-10",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "Afghanistan vs Zimbabwe ODI",
      "date": "2025-03-14",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "Ireland vs Netherlands T20",
      "date": "2024-07-18",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    },
    {
      "event": "India vs Sri Lanka Asia Cup Final",
      "date": "2024-09-30",
      "players": [
        {
          "name": "Rohit Sharma",
          "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAVvOuGk_oGxps5kb1oTzRkRREJr_k2d6PoNDCGIPrl9Qk8BMI4qCIv5EBDUBmb-Eb1RSENPYVvNwAp9s",
          "category": "batter"
        },
        {
          "name": "Shubman Gill",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401837.jpg",
          "category": "batter"
        },
        {
          "name": "Virat Kohli",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_portrait.jpg",
          "category": "batter"
        },
        {
          "name": "Rishabh Pant",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Rishabh_Pant_2019.jpg",
          "category": "batter"
        },
        {
          "name": "Hardik Pandya",
          "image": "https://media.gettyimages.com/id/1570043676/photo/cricket-ind-wis-odi.webp?s=2048x2048&w=gi&k=20&c=5cdB0rLKSxPa_j1vHNf05JULRay9FOp5CPwfPpm4aaQ=",
          "category": "allrounder"
        },
        {
          "name": "Ravindra Jadeja",
          "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ravindra_Jadeja_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Axar Patel",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Axar_Patel_2019.jpg",
          "category": "allrounder"
        },
        {
          "name": "Jasprit Bumrah",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Jasprit_Bumrah_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Shami",
          "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401800/401861.jpg",
          "category": "bowler"
        },
        {
          "name": "Mohammed Siraj",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mohammed_Siraj_2019.jpg",
          "category": "bowler"
        },
        {
          "name": "Kuldeep Yadav",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Kuldeep_Yadav_2019.jpg",
          "category": "bowler"
        }
      ]
    }
  ]
  

const Squads = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedEvent(null);
  };

  return (
    <View style={styles.container}>
      {EventData.map((event, index) => (
        <View key={index} style={styles.eventCard}>
          <View style={styles.eventHeader}>
            <View>
              <Text style={styles.eventName}>{event.event}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
            </View>
            <TouchableOpacity onPress={() => openModal(event)} style={styles.viewButton}>
              <Text style={styles.viewButtonText}>Squad</Text>
              <Ionicons 
                name={"chevron-forward"} 
                size={16} 
                color="#000" 
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedEvent?.event}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Ionicons name="close" size={22} color="#666" />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.modalScrollView} showsVerticalScrollIndicator={false}>
              <View style={styles.modalPlayersContainer}>
                {selectedEvent?.players.map((player, playerIndex) => (
                  <View key={playerIndex} style={styles.modalPlayerCard}>
                    <Image source={{ uri: player.image }} style={styles.modalPlayerImage} />
                    <Text style={styles.modalPlayerName}>{player.name}</Text>
                    <Text style={styles.modalPlayerCategory}>{player.category}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Squads

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal:-30
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventName: {
    fontSize: 17,
    fontWeight:'600',
    fontWeight: 'bold',
    color: '#121212',
  },
  eventDate: {
    fontSize: 14,
    color: '#aaa',
  },
  viewButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 13,
    marginRight: 4,
  },
  dropdownIcon: {
    marginLeft: 2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    position:'absolute',
    bottom:0,
    padding: 20,
    width: '100%',
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  closeButton: {
    padding: 2,
    backgroundColor:'#D7D7D7',
    borderRadius:70
  },
  modalScrollView: {
    flex: 1,
  },
  modalPlayersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
  modalPlayerCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  modalPlayerImage: {
    width: 38,
    height: 38,
    borderRadius: 35,
    marginBottom: 5,
  },
  modalPlayerName: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  modalPlayerCategory: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
})