import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pubTitle: {
    fontSize: 15,
  },
  pubAuthors: {
    fontSize: 11,
  },
  IdxAndJournal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pubJournal: {
    marginLeft: 5,
    fontSize: 11,
  },
  pubIdx: {
    fontSize: 11,
  },
  pubCategory: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 2.5,
    paddingHorizontal: 7.5,
  },
  pubCategoriesList: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  categoryItem: {
    borderRadius: 8,
    marginVertical: 1.5,
    marginHorizontal: 1.5,
    overflow: 'hidden',
  },
  encircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  margin_10: {
    borderBottomWidth: 0.75,
    marginTop: 10,
    marginBottom: 15,
  },
});
