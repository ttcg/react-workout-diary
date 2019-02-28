import request from './lib/request';

const apiPrefix = '/workouts'

function add(data) {
  return request({
    url:    `/TodoTask`,
    method: 'POST',
    data: data
  });
}

function getAll () {
  return request({
    url:    apiPrefix,
    method: 'GET'
  });
}

function get(id) {
  return request({
    url:    `/TodoTask/${id}`,
    method: 'GET'
  });
}

function remove(id) {
  return request({
    url:    `/TodoTask/${id}`,
    method: 'DELETE'
  });
}

function reset(id) {
  return request({
    url:    `/TodoTask/reset`,
    method: 'POST'
  });
}

function update(id, data) {
  return request({
    url:    `/TodoTask/${id}`,
    method: 'PUT',
    data: data
  });
}



const WorkoutService = {
  add,
  getAll,
  get,
  remove,
  reset,    
  update
}

export default WorkoutService;
