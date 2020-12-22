# Feedback and Important Notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a useful CLI tool for creating React applications. It has a built-in webpack configuration with default values, that can be extended via a config file for a custom-configuration (e.g. add some cool plug-ins, like Brotoli compression).

This application also uses [Material UI](https://material-ui.com) as a UI Framework. Material UI is one of the best (if not the best) UI framework for React. Although it follows Google's Material Design Guidelines, every component's styles can be easily overiden to implement custom styles. It also provedes useful tools (via React Hooks) and eases tremendously the development.

This app was built with an offline-first Progressive Web Application design in mind. It implements a service worker in order to enable rich features such as assets caching, offline capabilities and push notifications. This also provides faster loads, with an app-shell architecture and lazy loading components. By using this approach, components from the app-shell, like background and header, the First Meaningful Paint loads faster to the user.

Concerning app state, I personally prefer implementing React Contexts. However, Redux is a strong posibility as well.

Finally, since this is just a mock-up, there is not much to test. Create-react-app includes `react-testing` library by default. `Jest` is also a good option. Since I did not have enough time (I had to pause many times due to work calls) I had no time to achieve testing. 

### Useful libraries
This are some useful libraries (not all of them are present in this project).
- React Router, useful library for app routing.
- react-i18n, for localization.
- axios: nice lib for HTTP requests.
- eslint & prettier: for develpment env only, keeps code clean!
- typescript: typed languages all the way!
- Redux & Sagas if you prefer centralized data stores.

## Features
- Load 100 albums, API is configured to dynamically change this number, though it is not implemented yet.
- Search albums: you can filter by name your top 100 albums. However, this feature filters by using the "includes" method of string. By any means this is correct. It should match against a RegExp.
- Love: You can love albums and have them in a separate list. This could be saved in localStorage to persist them (in a real-life scenario, a sql/noSQL DB).
- Open in AM: You can open your album in your Apple Music app. 
- Dark Mode: automatic dark mode. This setting depends on your device configuration.
- Responsiveness: the app's layout adapts to your PC/phone display. 

## Missing
This are some things I wanted to add but had no time doing so:
- Integrate with MusicJS to playback some seconds of the featured song of the album.
- Share the album somewhere else. 
- Offline support: present the App Shell instead of Chrome's t-rex. This can be achieved with the SW which is already enabled.
- Catch errors via React's Error Boundaries. 
- Catch api errors (yep, they are console-logged 😬).
- Testing. Do every component render accordingly? Again. Time. 
- Filter by year, artist, genre. 
- And many more.