<template>
	<h1>Test Ground</h1>
	<h3 class="test-text">test-text</h3>
	<a
		class="ahref"
		href="https://google.com"
		target="_blank"
		rel="noopener noreferrer"
	>
		Google
	</a>
	<br />
	<hr />

	<div>
		<input type="checkbox" />
		<input type="text" />
	</div>
</template>

<script setup>
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(json));

async function fetchMultipleAPIs() {
  try {
		const API_URL_1 = 'https://jsonplaceholder.typicode.com/todos/1';
		const API_URL_2 = 'https://jsonplaceholder.typicode.com/todos/2';
		const API_URL_3 = 'https://jsonplaceholder.typicode.com/todos/3';
    // 同時發起多個 API 請求，並等待它們完成



    const [result1, result2, result3] = await Promise.all([
      fetch(API_URL_1),
      fetch(API_URL_2),
      fetch(API_URL_3),
    ]);

    // 檢查請求是否成功
    if (!result1.ok || !result2.ok || !result3.ok) {
      throw new Error('至少有一個API請求失敗');
    }

    // 將回傳的資料解析為 JSON
    const data1 = await result1.json();
    const data2 = result2.json();
    const data3 = result3.json();

    // 在這裡處理 API 回傳的資料
    console.log('API 1 回傳:', result1);
    console.log('API 2 回傳:', data2);
    console.log('API 3 回傳:', data3);

    // 返回所有API的結果
    return [data1, data2, data3];
  } catch (error) {
    console.error('發生錯誤:', error);
    throw error; // 可以根據需要處理錯誤
  }
}

fetchMultipleAPIs()
  .then((results) => {
    // 在這裡處理所有API的結果
    console.log('所有API的結果:', results);
  })
  .catch((error) => {
    // 在這裡處理錯誤
    console.error('發生錯誤:', error);
  });

</script>

<style lang="scss" scoped>
.test-text {
	background-color: green;
}

.test-text:hover {
	background-color: red;
}

.test-text:before {
	content: '♥ before content';
	background-color: #ffba10;
}

.test-text:after {
	content: '♥ after content';
	background-color: #ffba10;
}

.ahref {
	font-size: xx-large;
	color: black;
}

.ahref:hover {
	color: red;
}

a:link {
	color: blue;
}

a:visited {
	color: green;
}
</style>
