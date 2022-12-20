import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  //You get navigation and route prop when screen is register for navigation
  const catId = route.params.categoryId; //getting data that was passed

  //displaying items belong to perticular id
  const displayedMelas = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; //return true is catId is present
  });

  useLayoutEffect(() => {
    //For displaying category title
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMelas}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
