import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ user, basket }] = useStateValue();

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(order => ({
                        id: order.id,
                        data: order.data(),
                    })))
                ))
        } else {
            setOrders([]);
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your orders</h1>

            <div className="orders-order">
                {orders?.map(order => (
                    <Order 
                        order={order}
                    />
                ))}
            </div>
        </div>
    )
}

export default Orders
