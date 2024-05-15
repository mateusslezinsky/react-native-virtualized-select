import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    borderColor: "#a2a1a1",
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    position: "relative",
    width: "100%",

  },
  label: {
    position: "absolute",
    top: -10,
    left: "5%",
    backgroundColor: "#fff",
    color: "#666",
    fontSize: 15,
    fontWeight: "600"
  },
  sendButton: {
    backgroundColor: "lightgreen",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    borderRadius: 25,
  },
  clearButton: {},
  textInput: {
    color: "#bdbdbd",
    fontSize: 15,
    paddingTop: 10,
    flex: 1,
  },
  innerView: {
    paddingHorizontal: 5,
    gap: 10,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  actionsView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"

  }
})
