const notifier = require('electron-notifications')

const notification = notifier.notify('1 Finger Punch', {
  buttons: ['NOT RIGHT NOW', 'FUCK YA'],
  message: 'Need a little Motivation?',
  vertical: true,
  duration : 10000
})

notification.on('buttonClicked', (text, index) => {
  notification.close()
  if (index ===0){
  // alert('You clicked "' + text + '" at index ' + index)
  } else {
     alert('Bruce Lee Quote')
  }
})