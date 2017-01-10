## DOM 조작 메소드 성능 비교
  ```javascript
  <div id="list" style="display:none">
  <script>
    var len  = 20;
  </script>
  ```
####performance 순위 및 설명
1. Array push
    ```javascript
    var html = [];
    for (var i = 0; i < len; i++) {
      html.push('<div>Test ' + i + '</div>');
    }

    document.getElementById('list').innerHTML = html.join('');
    ```
    * 현재는 반복을 20번밖에 안해 빠른 performance를 보이고 있으나, 크기가 커질수록 메모리 공간을 많이 차지해 느려질 것이다.
    * Array.push는 브라우저에 따라  performance가 많이 달라지므로, 불안정한 방법이라고 할 수 있다.

2. javascript innerHTML(after loop)
    ```javascript
    var element = document.getElementById('list');
    var html;
    for (var i = 0; i < len; i++) {
        html += '<div>Test ' + i + '</div>';
    }
    element.innerHTML = html;
    ```
    * String의 +연산을 반복문 내에서 사용하고, 반복문 밖에서 innerHTML을 사용하였다.
    * 이 방법은 array를 사용하는 것 보다 일정한 시간으로 빠르다고 할 수 있다.

3. jquery .html
    ```javascript
    var html = '';
    for (var i = 0; i < len; i++) {
      html += '<div>Test ' + i + '</div>';
    }

    $('#list').html(html);
    ```
    * .html은 임시 element을 만들고, 여기에 innerHTML을 사용한다.
    * 때문에 빈 곳에 string을 추가할 때는 .html함수보다 .append나 innerHTML을 사용하는 것이 권장된다.
      * 다만 교체할때는 .html이 뛰어나다.

4. jquery .append(inside loop)
    ```javascript
    for (var i = 0; i < len; i++) {
    var html = '<div>Test ' + i + '</div>';
    $('#list').append(html);
    }
    ```
    * .html과 비슷한 이유로 더할 때는 innerHTML보다 performance가 좋다.

5. javascript innerHTML(inside loop)
    ```javascript
    var list = document.getElementById('list');
    for (var i = 0; i < len; i++) {
      list.innerHTML = list.innerHTML + '<div>Test ' + i + '</div>';
    }
    ```
