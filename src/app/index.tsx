import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
];
const SUDOKU = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];
type ItemProps = { title: string };
const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SUDOKU.flat()}
        renderItem={({ item }) => <Item title={item.toString()} />}
        numColumns={9}
        style={{
          flex: 1,
          width: "100%",
          alignSelf: "center",
          backgroundColor: "gray",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "blue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "white",
  },
});
