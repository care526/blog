# Angular

## 命令
```bash
ng new xxx  // 新建工程
ng g component xxx
ng g component xxx
```

## Component
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
```

## NgModule
```ts
@NgModule({
  imports: [],
  providers: [],
  declarations: [],
  exports: [],
  bootstrap: []  // 根模块才应该设置这个 bootstrap 属性
})
export class AppModule { }
```