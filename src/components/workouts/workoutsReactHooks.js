import React, { useEffect, useState } from 'react';
import uuid from 'uuid';
import Moment from 'moment';

import {
    Container, Button
} from 'reactstrap';

import WorkoutService from "../services/workoutService";
import {
    WorkoutList,
    WorkoutAdd,
    WorkoutEdit
} from './index'

const WorkoutsReactHooks = () => {

    const [dataList, setDataList] = useState([]);
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [dataItem, setDataItem] = useState({});

    const getInitialState = () => {
        return {
            id: uuid.v4(),
            date: new Date(),
            workoutType: 'Running',
            calories: ''
        };
    }

    useEffect(() => {
        setTimeout(() => {
            setDataList(WorkoutService.getWorkouts())
        }, 1)
    }, []);

    const toggleAdd = () => {
        setAdd(!add)
    }

    const toggleEdit = () => {
        setEdit(!edit)
    }

    const showAddNew = () => {
        toggleAdd();
        setDataItem(getInitialState());
    }

    const showEdit = (item) => {
        toggleEdit();
        item.date = Moment(item.date).toDate()
        setDataItem(item);
    }

    const onChangeDate = date => {
        setDataItem({
            ...dataItem,
            'date': date
        })
    }

    const onInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        setDataItem({
            ...dataItem,
            [field]: value
        })
    }

    const handleAddNew = () => {
        setDataList([...dataList, dataItem])
        toggleAdd();
    }

    const handleEdit = id => {
        const index = dataList.findIndex(item => item.id === id);
        let newList = [...dataList];
        newList[index] = dataItem;

        setDataList(newList);
        toggleEdit();
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure that you want to delete this item?")) {
            setDataList(dataList.filter(item => item.id !== id))
        }
    }

    return <Container>
        <h1>Workouts (React Hooks)</h1>
        <Button onClick={showAddNew} color="link">Add New Workout</Button>
        <WorkoutList
            items={dataList}
            showEdit={showEdit}
            handleDelete={handleDelete}
        />
        {add &&
            <WorkoutAdd
                toggle={toggleAdd}
                modal={add}
                item={dataItem}
                onChange={onInputChange}
                onChangeDate={onChangeDate}
                onAddNew={handleAddNew}
            />
        }
        {edit &&
            <WorkoutEdit
                toggle={toggleEdit}
                modal={edit}
                item={dataItem}
                onChange={onInputChange}
                onChangeDate={onChangeDate}
                onEdit={handleEdit}
            />
        }
    </Container>
}

export default WorkoutsReactHooks;