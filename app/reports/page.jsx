export default function Reports() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          학생 주간 리포트
        </h1>
        <div className="space-y-2">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">테스트 점수:</span> 95점
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">과제 제출:</span> 완료
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">비고:</span> 이번 주 집중도 좋음
          </p>
        </div>
      </div>
    </div>
  );
}
