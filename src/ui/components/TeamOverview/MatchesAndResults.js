import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OverViewCard from '../MatchOverView/OverViewCard'

const matchesData = [
  {
    subtitle: "1st unofficial Test, Galle, January 31 – February 03, 2023, England Lions tour of Sri Lanka",
    india: { flag:{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'}, score: "136" },
    england: { flag: {uri:'https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg'}, score: "305/5 (57 ov)" },
    currentRR: "5.40",
    minOvRem: "77.4",
    last10ov: "68/2 (6.80)",
    dayInfo: "Day 2 - Eng Lions lead by 169 runs.",
    isLive: false,
    matchdate: 'Tue, 30 Aug'
  },
  {
    subtitle: "2nd T20I, Melbourne, February 11, 2024, India tour of Australia",
    india: { flag:{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'}, score: "235/4 (20 ov)" },
    australia: { flag: {uri:'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg'}, score: "191/9 (20 ov)" },
    currentRR: "9.55",
    minOvRem: "0",
    last10ov: "98/3 (9.80)",
    dayInfo: "India won by 44 runs",
    isLive: false,
    matchdate: 'Sun, 11 Feb'
  },
  {
    subtitle: "3rd ODI, Cape Town, February 15, 2024, South Africa vs New Zealand",
    southAfrica: { flag: {uri:'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg'}, score: "287/6 (50 ov)" },
    newZealand: { flag: {uri:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'}, score: "145/3 (25 ov)" },
    currentRR: "5.80",
    minOvRem: "25",
    last10ov: "45/1 (4.50)",
    dayInfo: "Day 1 - NZ need 143 runs from 25 overs",
    isLive: true,
    matchdate: 'Thu, 15 Feb'
  }
];

const MatchesAndResults = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Matches</Text>
      {matchesData.map((match, index) => (
        <OverViewCard key={index} data={match} />
      ))}
    </View>
  )
}

export default MatchesAndResults

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal:-24
      },
      heading: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 25,
        paddingLeft:24,
        width:'100%',
        marginVertical: 16,
      },
})