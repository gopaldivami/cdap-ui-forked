import { makeStyles } from '@material-ui/core/styles';

export const useConnectorTypeCardComponentStyles = makeStyles(() => ({
  cardWrapper: {
    width: '166px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '0px',
    margin: '0px',
    padding: '0px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ffffff',
      boxShadow: '3px 4px 15px rgba(68, 132, 245, 0.15)',
    },
  },
  connectorTypeName: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 400,
    letterSpacing: '0.15px',
    marginTop: '7px',
    textDecoration: 'none !important',
    color: '#000000',
  },
}));