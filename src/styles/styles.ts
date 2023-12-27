import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'orange',
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
  imagesList: {
    paddingHorizontal: 14,
  },
  imagesItem: {
    width: '100%',
    marginBottom: 20,
  },
  description: {
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 260,
    borderRadius: 10,
  },
  footer: {
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 'auto',
    backgroundColor: '#fff',
  },
});
