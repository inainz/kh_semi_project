// 회원 신고 모달 열기
function openReportModal() {
  document.getElementById('re_nickname').value = '';
  document.getElementById('report_reason').value = '';

  document.getElementById('reportModal').style.display = 'flex';
}

// 회원 신고 모달 닫기
function closeReportModal() {
  document.getElementById('reportModal').style.display = 'none';  // 모달 숨기기
}

// 신고 제출 처리
function submitReport() {
  const nickname = document.getElementById('re_nickname').value.trim();
  const reason = document.getElementById('report_reason').value.trim();

  if (!reason) {
    alert("신고 사유를 입력해주세요.");
    return;
  }

  closeReportModal();
  alert("신고가 접수되었습니다.");
}

// 바깥 클릭 시 닫기
window.addEventListener('click', function (e) {
  const modal = document.getElementById('reportModal');

  if (e.target === modal) {
    closeReportModal();
  }
});