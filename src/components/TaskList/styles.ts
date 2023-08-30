import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    width: 46,
    height: 287,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 46,
    gap: 8,
    marginTop: -30,
  },
  input: {
    backgroundColor: '#262626',
    border: '#0D0D0D',
    borderRadius: 8,
    width: 638,
    height: 52,
    padding: 1,  
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    width: 90,
    height: 52,
    borderRadius: 8,
    backgroundColor: '#1E6F9F',
    border: '#1E6F9F',
    color: '#F2F2F2',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  created: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
    gap: 8,
  },
  concluded: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    gap: 8,
  },
  
  cardList: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  
  : {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  
    height: 155,
    width: 46,
  
    background-color: var(--gray-600),
    border-top: 1 solid var(--gray-400),
    borderRadius: 8,
  
    padding: 16,
  },
  
  cardList aside p: {
    fontSize: 0875,
    fontWeight: normal,
    line-height: 14,
    color: var(--gray-300),
  
    flex-g'row': 0,
    flex-shrink: 0,
  
    padding: 0 12,
  },
  
  cardList aside p strong: {
    fontSize: 0875,
    fontWeight: bold,
    line-height: 14,
    color: var(--gray-300),
  
    padding: 0 12,
  },
  
  card: {
    display: flex,
    alignItems: 'center',
    justifyContent: space-around,
    flex: 0,
    background: var(--gray-500),
    border: 1 solid var(--gray-400),
    box-shadow: 0 2 8 rgba(0, 0, 0, 006),
    borderRadius: 8,
  },
  
  card input: {
    margin-left: 20,
    text-decoration: line-through,
    background: var(--purple),
    borderRadius: 8,
  },
  
  card p: {
    fontSize: 0875,
    line-height: 14,
    color: var(--gray-100),
    padding: 1 075,
    borderRadius: 5,
  },
  
  card button: {
    background: none,
    border: none,
    width: 15,
    height: 15,
    borderRadius: 4,
    color: var(--gray-300),
    transition: all ease-in-out 03s,
    cursor: pointer,
    margin-right: 1,
  },
  
  card button:hover: {
    background: var(--gray-400),
    color: var(--danger),
  }
})