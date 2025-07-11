// 회원 신고 모달

function openReportModal() {
  document.getElementById('re_nickname').value = '';
  document.getElementById('report_reason').value = '';
  document.getElementById('reportModal').style.display = 'flex';
}

function closeReportModal() {
  document.getElementById('reportModal').style.display = 'none';
}

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