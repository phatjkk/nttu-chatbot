Với thông tin này, bạn nên sử dụng URL ngrok mới để thực hiện các yêu cầu. Hãy thử lại với URL ngrok chính xác:

1. **Test endpoint root**:
```bash
curl https://briefly-knowing-treefrog.ngrok-free.app/
```

2. **Test endpoint RAG với source "nttu"**:
```bash
curl "https://briefly-knowing-treefrog.ngrok-free.app/rag/nttu?q=xin%20chao"
```

3. **Test với headers để tránh lỗi ngrok**:
```bash
curl -H "ngrok-skip-browser-warning: 69420" "https://briefly-knowing-treefrog.ngrok-free.app/rag/nttu?q=xin%20chao"
```

4. **Test với source "wiki"**:
```bash
curl -H "ngrok-skip-browser-warning: 69420" "https://briefly-knowing-treefrog.ngrok-free.app/rag/wiki?q=xin%20chao"
```

5. **Xem response đầy đủ với headers**:
```bash
curl -v -H "ngrok-skip-browser-warning: 69420" "https://briefly-knowing-treefrog.ngrok-free.app/rag/nttu?q=xin%20chao"
```

Hãy thử các lệnh này và xem kết quả. Nếu vẫn gặp lỗi, hãy kiểm tra lại cấu hình endpoint trong code backend.
