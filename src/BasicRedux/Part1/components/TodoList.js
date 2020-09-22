import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {toggleTodoAction} from '../redux';
import TodoItem from './TodoItem';

// const TodoList = ({todos, toggleTodo}) => {
const TodoList = () => {
  const todos = useSelector(state => {
    return state.todos;
  });
  const dispatch = useDispatch();
  const toggleTodo = id => dispatch(toggleTodoAction(id));

  const _renderItem = ({item}) => (
    <TodoItem todo={item} toggleTd={() => toggleTodo(item.id)} />
  );
  const _itemSeparator = () => (
    <View style={{height: 0.5, backgroundColor: 'rgba(0,0,0,0.5)'}} />
  );
  const _listEmptyComp = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text style={{fontSize: 20}}>Todo is empty</Text>
    </View>
  );

  return (
    <FlatList
      style={{flex: 1, marginHorizontal: 15}}
      data={todos}
      renderItem={_renderItem}
      ItemSeparatorComponent={_itemSeparator}
      ListEmptyComponent={_listEmptyComp}
      keyExtractor={item => item.id.toString()}
    />
  );
};

// versi not hook

// const mapStateToProps = state => ({
//   todos: state.todos,
// });

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodoAction(id)),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TodoList);

export default TodoList;
