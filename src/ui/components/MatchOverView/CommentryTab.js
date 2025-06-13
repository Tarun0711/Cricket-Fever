import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommentryTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:17,fontWeight:'600',textAlign:'left',lineHeight:25}}>
        CommentryTab
      </Text>
    </View>
  )
}

export default CommentryTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 4,
  },
})