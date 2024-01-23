
let jobs = [];
class Job {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
function showMenu() {
  console.log('------ MENU ------');
  console.log('1. Thêm công việc mới');
  console.log('2. In danh sách công việc');
  console.log('3. Tìm kiếm công việc theo id');
  console.log('4. Thoát');
  console.log('------------------');

  const choice = prompt('Nhập lựa chọn của bạn:');

  switch (choice) {
    case '1':
      addJob();
      break;
    case '2':
      printJobs();
      break;
    case '3':
      searchJobById();
      break;
    case '4':
      console.log('Thoát');
      return;
    default:
      console.log('Lựa chọn không hợp lệ');
  }

  showMenu(); 
}
function addJob() {
  const id = prompt('Nhập id của công việc:');
  const title = prompt('Nhập tiêu đề công việc:');
  const description = prompt('Nhập mô tả công việc:');
  const completed = prompt('Công việc đã hoàn thành? (true/false):');

  const job = new Job(id, title, description, completed);
  jobs.push(job);

  console.log('Công việc đã được thêm vào danh sách');
}
function printJobs() {
  if (jobs.length === 0) {
    console.log('Danh sách công việc rỗng.');
  } else {
    console.log('Danh sách công việc:');
    for (const job of jobs) {
      console.log(`Id: ${job.id}`);
      console.log(`Tiêu đề: ${job.title}`);
      console.log(`Mô tả: ${job.description}`);
      console.log(`Hoàn thành: ${job.completed}`);
      console.log('------------------');
    }
  }
}
function searchJobById() {
  const id = prompt('Nhập id của công việc cần tìm:');
  let foundJob = null;

  for (const job of jobs) {
    if (job.id === id) {
      foundJob = job;
      break;
    }
  }

  if (foundJob) {
    console.log('Thông tin công việc:');
    console.log(`Id: ${foundJob.id}`);
    console.log(`Tiêu đề: ${foundJob.title}`);
    console.log(`Mô tả: ${foundJob.description}`);
    console.log(`Hoàn thành: ${foundJob.completed}`);
  } else {
    console.log('Không tìm thấy công việc.');
  }
}
showMenu();