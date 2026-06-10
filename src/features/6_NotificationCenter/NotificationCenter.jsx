import { useState } from "react";
import NotificationButton from "./NotificationButton";
import NotificationsList from "./NotificationsList";
import './style6.scss' 
export default function NotificationCenter() {
    const [ notifications, setNotifications ] = useState([
      {
        id: 1,
        type: "info",
        title: "New Update Available",
        content: "Version 2.1 is ready to install.",
        time: "2 min ago",
        read: false,
      },
      {
        id: 2,
        type: "success",
        title: "Payment Successful",
        content: "Your subscription has been renewed.",
        time: "10 min ago",
        read: false,
      },
      {
        id: 3,
        type: "warning",
        title: "Storage Almost Full",
        content: "You have used 90% of your storage space.",
        time: "1 hour ago",
        read: false,
      },
      {
        id: 4,
        type: "error",
        title: "Login Attempt Failed",
        content: "Someone tried to access your account.",
        time: "3 hours ago",
        read: false,
      },
    ])
    const unreadCount = notifications.filter(
  notification => !notification.read
).length;
    const [ notificationsIsOpen, setNotificationsIsOpen ] = useState(false)
    const handleReadNotification = (id) => {
        
        setNotifications(prev =>
          prev.map(notification =>
            notification.id === id
            ? {
               ...notification,
               read: !notification.read
              }
            : notification
          )
        );
    };
    return (
    <div className="notification-center">
       <nav>
        <NotificationButton 
         hasUnreadNotifications = {unreadCount > 0}
         onClick={() => setNotificationsIsOpen(prev => !prev)}
        />
       </nav>
       {notificationsIsOpen &&
        <div className="notifications-container">
           <h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
            Notifications
            <span>
                {`(${unreadCount})`}
            </span>
           </h3>
           <NotificationsList 
           notifications={notifications}
           handleReadNotification={handleReadNotification}
           />
       </div>
       }
    </div>
  )
}
