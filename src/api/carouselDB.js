import $ from 'jquery'
import config from './config'

export function getCarousel (type = 1) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.carouse.list,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: {type: type},
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        // resolve({data: [{image: '/static/slide1.png'}, {image: '/static/slide1.png'}, {image: '/static/slide1.png'}]})
        reject(err)
      }
    })
  })
}
