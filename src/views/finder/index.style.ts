import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme:any) => {
  return {
    container: {
      width: '100%',
    },
    filterWrapper: {
      margin: theme.spacing(0, 0.5),
    },
    tab: { width: '100%', boxShadow: '0 0 0 0', whiteSpace: 'nowrap' },
  
    rootCard: {
      height: '100vh',
      flex: 1,
    },
    headerCard: {
      height: '280px',
      display: 'grid',
      gridTemplateColumns: '500px 1fr',
      // background: 'radial-gradient(135.46% 135.46% at 49.62% 39.93%, #FFFFFF 29.48%, #D4C8F8 100%)',
      // boxShadow: ' 0px 7px 64px rgba(0, 0, 0, 0.07)',
      // borderRadius: '6px',

      background: 'radial-gradient(86.71% 86.72% at 50% 45.52%, #FFFFFF 39.72%, #DCD1FF 100%)',
      border: '1px solid #EAE4FC',
      borderRadius: '20px',
    },
    searchEntityContainer: {
      marginBottom: '20px',
      display: 'grid',
      gridTemplateColumns: '160px 1fr 50px',
      justifyContent: 'flex-end',
    },
  
    searchBarParentContainer: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    searchBarContainer: {
      height: '42px',
      boxShadow: 'none',
      border: '1px solid #D6D6D6',
      width: '100%',
      '& button': {
        padding: '8px',
      },
    },
    dropdownContainer: {
      display: 'flex',
      flex: 0.4,
      marginRight: 20,
      '& input': {
        background: 'white',
        color: '#4D4D4D',
        fontWeight: 400,
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
    },
    dropdownAutoComplete: {
      minWidth: 150,
      height: 40,
      '& div': {
        '& div': {
          background: '#FFFFFF',
          '& div': {
            height: 'fit-content',
          },
        },
      },
    },
    tablePaperRoot: {
      padding: '0 15px',
    },
    hideEl: {
      visibility: 'hidden',
    },
  }
 
})

export default useStyles
