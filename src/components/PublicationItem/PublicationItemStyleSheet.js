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
    fontSize: 12,
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
});
