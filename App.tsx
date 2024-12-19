import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './compoents/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards>

          </FlatCards>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App