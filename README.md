# Notify

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

Angular Notification Toaster Module (notify-toaster)
==============================================

The library provides a notification which is written in Angular and it is dependent on native angular

## Guide:

 1. Install the notify-toaster using npm
    `npm install notify-toaster`
   - **Note** : Use the regular npm flags such as 
         - `--save` to include under dependencies in `package.json`.
         - `-g` to install it globally
         
*************************

 2. Add `NotifyModule` to AppModule by importing it from `notify-toaster` package 
```
    import { NotifyModule } from 'notify-toaster';
    
    @NgModule({
      imports: [NotifyModule],
      ...
    })
    export class AppModule {
    }
```
*************************

 3. As this library uses Angular animations. `BrowserAnimationsModule` should also be imported to the `app.module`. 
 - **Note** : Further exploration of `@angular/animations` module can be referred [**here**](https://angular.io/guide/animations#animations), official documentation.
 
 ```
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    @NgModule({
      imports: [BrowserAnimationsModule],
      ...
    })
    export class AppModule {
    }
```
 
     
*************************

  4. **Create a placeholder** for the `app-notify-container` componenet in your `app.component.html`
```
    <app-notify-container></app-notify-container>
```

*************************

  5. Inject the **NotifyService** into your component
```
    constructor(private notifyService: NotifyService) { }
```

*************************

  6. The **toast message configuration** contains following properties<br/>

|**Property**    | **Data Type** |  **Mandatory**   |   **Default Value**     |               **Usage**                            |
| ------------   |  ----------   |  --------------  |  ---------------------  |  ----------------------------------------------    |
| id              |   string      |       No         |   ----------            |  Auto generated for each notification             |
| message         |   string      |       Yes        |   ----------            |  The user defined toast message                   |
| autoHide        |   boolean     |       No         |     true                |  This will hide the message                       |
| displayDuration |   number      |       No         |     5000(milli seconds) |  Timeout Duration can be set using this property  |
| showCloseButton |   boolean     |       No         |     true                |  Close button can be seen for manually closing it |
| toastType       |   ToastType   |       Yes        |   ----------            |  Type of the toast message can be set htere       |

- where `ToastType` is a enumeration type that determines the type of the notification which takes a five values viz.,
    * success
    * update
    * warning
    * info
    * delete

*************************

7. To **show the toast message** you should be calling the `show()` method that takes only two argument, type of notification and messsage
  ```
  pushSuccess() {
    this.notification.show('success', 'This is a success alert');
  }
  ```
*************************

8. To **manually close** a particular toast message set the `autoHide` property as `false` and `showCloseButton` property as `true` which displays a close button using which the message can be manually closed.

*************************


*************************

9. To show **multiple notification** messages you can call the `show()` multiple times by configuring the notification object as you wish
  ```
  pushSuccess() {
    this.notification.show('success', 'This is a success notification');
  }
  pushUpdate() {
    this.notification.show('update', 'This is a update notification');
  }
  pushWarn() {
    this.notification.show('warning', 'This is a warning notification');
  }
  pushInfo() {
    this.notification.show('info', 'This is a info notification');
  }
  pushDelete() {
    this.notification.show('delete', 'This is a delete notification');
  }
  ```
  
For LIVE DEMO checkout



