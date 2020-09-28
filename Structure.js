import React, { useState } from "react";

export default function Structure() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Tabs" component={Tabs}>
        <Tabs.Screen name="Movies" component={Movies}>
          <indexJS>
            <MoviesContainer>
              <MoviesPresenter>
                <SliderContainer>
                  <Slide></Slide>
                  <Container>
                    <ScrollView>
                      <Vertical></Vertical>
                    </ScrollView>
                  </Container>
                </SliderContainer>
              </MoviesPresenter>
            </MoviesContainer>
          </indexJS>
        </Tabs.Screen>
        <Tabs.Screen name="TV" component={Tv} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Discovery" component={Favs} />
      </Stack.Screen>
      <Stack.Screen name="Detail" component={Detail} />
    </NavigationContainer>
  );
}
