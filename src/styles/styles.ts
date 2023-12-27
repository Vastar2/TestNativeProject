import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 14,
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 14,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 90,
  },
  galleryInput: {
    height: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 22,
    flex: 1,
  },
  buttonSearch: {
    height: 62,
    width: 62,
    fontSize: 22,
    borderRadius: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 'auto',
  },
});
