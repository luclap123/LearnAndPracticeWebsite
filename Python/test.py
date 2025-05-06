# File: youtube_gui_downloader.py

import os
import tkinter as tk
from tkinter import ttk, messagebox, filedialog
import yt_dlp


def download():
    url = url_var.get()
    choice = download_type.get()
    resolution = resolution_var.get()

    if not url:
        messagebox.showerror("Lỗi", "Vui lòng nhập URL video!")
        return

    if "youtube.com/watch?v=" not in url and "youtu.be/" not in url:
        messagebox.showerror("Lỗi", "URL không hợp lệ!\nVí dụ: https://www.youtube.com/watch?v=xxxx")
        return

    try:
        save_path = filedialog.askdirectory()
        if not save_path:
            return

        status_var.set("🔄 Đang tải...")
        root.update_idletasks()

        ydl_opts = {
            'outtmpl': os.path.join(save_path, '%(title)s.%(ext)s')
        }

        if choice == "Video":
            ydl_opts['format'] = f"bestvideo[height<={resolution.replace('p', '')}]+bestaudio/best"
        else:
            ydl_opts['format'] = 'bestaudio/best'
            ydl_opts['postprocessors'] = [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }]

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])

        status_var.set("✅ Hoàn tất!")
        messagebox.showinfo("Thành công", "Tải xuống thành công!")

    except Exception as e:
        status_var.set("❌ Lỗi!")
        messagebox.showerror("Lỗi khi tải video", str(e))


# GUI setup
root = tk.Tk()
root.title("YouTube Downloader")
root.geometry("400x300")
root.resizable(False, False)

url_var = tk.StringVar()
download_type = tk.StringVar(value="Video")
resolution_var = tk.StringVar(value="720p")
status_var = tk.StringVar()

# Widgets
tk.Label(root, text="YouTube URL:").pack(pady=5)
tk.Entry(root, textvariable=url_var, width=50).pack(pady=5)

frame_options = tk.Frame(root)
frame_options.pack(pady=10)

# Download type
tk.Label(frame_options, text="Loại tải:").grid(row=0, column=0, sticky='w')
tk.Radiobutton(frame_options, text="Video", variable=download_type, value="Video").grid(row=0, column=1)
tk.Radiobutton(frame_options, text="MP3", variable=download_type, value="MP3").grid(row=0, column=2)

# Resolution dropdown
tk.Label(frame_options, text="Chất lượng:").grid(row=1, column=0, sticky='w')
resolutions = ["360p", "480p", "720p", "1080p"]
ttktheme = ttk.Combobox(frame_options, values=resolutions, textvariable=resolution_var, state='readonly')
ttktheme.grid(row=1, column=1, columnspan=2)

# Download button
tk.Button(root, text="Tải xuống", command=download).pack(pady=10)

# Status label
tk.Label(root, textvariable=status_var, fg='blue').pack(pady=5)

root.mainloop()
