import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  lato: {
    fontFamily: 'Lato-Light',
  },
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
    fontFamily: 'Lato-Regular',
    marginLeft: 5,
    fontSize: 11,
  },
  pubIdx: {
    fontFamily: 'Lato-Regular',
    fontSize: 11,
  },
  pubCategory: {
    color: 'white',
    fontFamily: 'Lato-Semibold',
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
    // borderWidth: 1,
    marginVertical: 1.5,
    marginHorizontal: 1.5,
    overflow: 'hidden',
  },
  encircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    // backgroundColor: 'gray',
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
