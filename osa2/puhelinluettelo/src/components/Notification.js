const Notification = ({ message }) => {
  const notificationStyle = {
    color: 'red',
    borderStyle: 'solic'
  }

  console.log("notification: ", message)

  if (message === null) {
    return null
  }

  console.log("####")
  return (
    <div style={notificationStyle}>
      {message.message}
    </div>
  )
}

export default Notification