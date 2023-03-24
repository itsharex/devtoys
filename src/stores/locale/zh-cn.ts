export const language: Record<string, string> = {
    Configuration: "配置",
    Format: "格式化",
    Pretty: "美化",
    Minified: "压缩",
    Encoded: "编码",
    Decoded: "解码",
    File: "文件",
    Text: "文本",
    Copy: "复制",
    Paste: "粘贴",
    "Copied!": "复制!",
    "Pasted!": "粘贴!",
    Open: "打开",
    Export: "导出",
    Import: "导入",
    Input: "输入",
    Output: "输出",
    "No selection": "无选择",
    "Drop Files Here": "将文件拖入此处",
    "Paste Files Here": "将文件粘贴到此处",
    "Untitled Tool": "未命名工具",
    UpperCase: "大写",
    Hyphens: "连字",
    Type: "种类",
    Length: "长度",
    Convert: "转换",
    Information: "信息",
    Clear: "清空",
    Delete: "删除",
    Camera: "相机",
    Clipboard: "剪贴板",
    Default: "默认",
    or: "或",
    "Click to Open": "点击打开",
    "Failed to call camera": "调用摄像头失败",
    "Text Editor": "文本编辑器",
    "Parsing Failed": "解析失败",

    // - Category -
    "category.all": "所有工具",
    "category.converters": "转换类",
    "category.encoders_decoders": "编码 / 解码类",
    "category.formatters": "格式类",
    "category.generators": "生成类",
    "category.text": "文本类",
    "category.graphic": "图像类",
    "category.media": "媒体类",

    // - Tool -
    "tool.all.title": "所有工具",
    "tool.all.mintitle": "所有工具",
    "tool.all.description": "在这里搜索所有工具",
    "Open in new tab": "在新标签页打开",
    "Add to favorites": "添加到收藏夹",
    "Remove from favorites": "从收藏夹移除",

    "tool.jsonyaml.title": "JSON <> Yaml 转换工具",
    "tool.jsonyaml.mintitle": "JSON <> Yaml",
    "tool.jsonyaml.description": "将json与yaml相互转换",

    "Read from file": "从文件读取",

    "tool.numbase.title": "数字类型转换工具",
    "tool.numbase.mintitle": "数字类型转换",
    "tool.numbase.description": "将数字从一种类型转换为另一个类型",
    "Format Number": "格式化数字",
    Decimal: "十进制",
    Hexdecimal: "十六进制",
    Octal: "八进制",
    Binary: "二进制",

    "tool.cron.title": "Cron 表达式解析工具",
    "tool.cron.mintitle": "Cron 解析",
    "tool.cron.description": "解析Cron表达式以获取预定日期",
    "Output Formatter": "输出格式",
    "Cron Mode Contain Second(6 paragraphs)": "Cron 模式包括秒数（6段）",
    "Number of Next Scheduled Dates": "下一个预定日期数量",
    "Next Scheduled Dates": "下一个预定日期",
    "Cron Expression to parse": "要解析的Cron表达式",

    "tool.date.title": "日期转换工具",
    "tool.date.mintitle": "日期",
    "tool.date.description": "将日期从一种格式转换为另一种格式",
    Now: "现在时间",
    Date: "时间",
    "Unix Time": "Unix 时间",
    "ISO 8601": "ISO 8601",
    Calender: "日历",

    "tool.html.title": "HTML 编码 / 解码",
    "tool.html.mintitle": "HTML",
    "tool.html.description": "将字符编码或解码为相应的HTML",

    "tool.url.title": "URL 编码 / 解码",
    "tool.url.mintitle": "URL",
    "tool.url.description": "将字符编码或解码为相应的URL",

    "tool.base64.title": "Base64 编码 / 解码",
    "tool.base64.mintitle": "Base64",
    "tool.base64.description": "编码或解码 Base64 数据",
    "Source Type": "数据来源",
    "Text Source": "字符串",
    "File Source": "文件",

    "tool.jwt.title": "JWT 编码 / 解码",
    "tool.jwt.mintitle": "JWT",
    "tool.jwt.description": "解码JWT头部的负载和签名",
    "JWT Token": "JWT 密钥",
    Header: "头部",
    Payload: "负载",

    "tool.jsonformat.title": "JSON 格式化工具",
    "tool.jsonformat.mintitle": "JSON",
    "tool.jsonformat.description": "缩进或压缩 json 数据",
    Indentation: "Indentation",
    "2 Spaces": "2 Spaces",
    "4 Spaces": "4 Spaces",
    "1 Tab": "1 Tab",

    "tool.sqlformat.title": "SQL 格式化工具",
    "tool.sqlformat.mintitle": "SQL",
    "tool.sqlformat.description": "格式化 sql 语句",

    "tool.xmlformat.title": "XML 格式化工具",
    "tool.xmlformat.mintitle": "XML",
    "tool.xmlformat.description": "缩进或压缩 XML 数据",
    "HTML Document": "HTML 文档",
    "XML Document": "XML 文档",
    "Document Type": "文档类型",
    "Auto Fix Document": "自动修复",
    "Pretty Document": "美化",

    "tool.hashgen.title": "Hash 哈希值生成工具",
    "tool.hashgen.mintitle": "哈希",
    "tool.hashgen.description":
        "从文本数据计算多种哈希值",//MD5, SHA1, SHA256和SHA 512

    "tool.uuidgen.title": "UUID 生成工具",
    "tool.uuidgen.mintitle": "UUID",
    "tool.uuidgen.description": "生成 UUID",
    "Generate UUIDs": "生成 UUID",
    "Type of generating Lorem Ipsum": "生成种类",
    "Length of generating Lorem Ipsum": "生成数量",
    Words: "单词",
    Sentences: "句子",
    Paragraphs: "段落",
    "Generate article": "生成文章",
    "Article": "文章",

    "tool.ligen.title": "乱数假文Lorem Ipsum生成工具",
    "tool.ligen.mintitle": "乱数假文",
    "tool.ligen.description": "生成Lorem Ipsum的占位符文本",

    "QR Code Generator": "二维码生成",
    "Create a QR code from text": "使用文本创建二维码",
    "Correction Level": "结构复杂性",
    "QR Code": "二维码",

    "tool.checksum.title": "校验测试工具",
    "tool.checksum.mintitle": "校验测试",
    "tool.checksum.description": "生成或测试文件的校验和",
    "Output Comparer": "比较输出",
    "Hash Algorithm": "散列算法",
    "Select which algorithm you want to use": "选择要使用的算法",

    "tool.textinspect.title": "文本检查 & 大小写转换工具",
    "tool.textinspect.mintitle": "文本检查",
    "tool.textinspect.description": "分析文本并将其转换为不同的大小写",
    Charactors: "符号",
    Lines: "行数",
    Bytes: "字节数",

    "tool.regex.title": "正则表达式测试工具",
    "tool.regex.mintitle": "正则表达式",
    "tool.regex.description": "测试正则表达式",
    "Reguler expression": "正则表达式",
    "Result": "结果",

    "Text Diff": "文本对比",
    "Compare two Text and display Diff": "对比展示两个文本不同处",
    "New Text": "旧文本",
    "Old Text": "新文本",
    "Difference": "差异",

    "tool.hyphenremove.title": "连字符号去除工具",
    "tool.hyphenremove.mintitle": "连字符号",
    "tool.hyphenremove.description": "删除从PDF文本复制的连字符",

    "tool.markdown.title": "Markdown 预览工具",
    "tool.markdown.mintitle": "Markdown 预览",
    "tool.markdown.description": "使用类似 Github 的渲染预览 Markdown 文档",

    "tool.imageoptim.title": "PNG/JPEG 压缩工具",
    "tool.imageoptim.mintitle": "PNG/JPEG 压缩",
    "tool.imageoptim.description": "无损的PNG和JPEG压缩工具",
    "Optimize Level": "压缩级别",
    Low: "低",
    Medium: "中",
    High: "高",
    "Very High (Slow)": "优 (慢)",

    "tool.pdfgen.title": "PDF 生成工具",
    "tool.pdfgen.mintitle": "PDF 生成",
    "tool.pdfgen.description": "从多个图像生成PDF",
    Images: "图像",
    Size: "大小",
    "Generate PDF": "生成 PDF",
    Page: "页面",

    "Icon Generate": "Icon生成",
    "Create a Icon from image": "将图像转换为Icon",

    "tool.imageconvert.title": "Image 转换工具",
    "tool.imageconvert.mintitle": "Image 转换",
    "tool.imageconvert.description": "转换或调整图像大小",
    "PNG Format": "PNG 格式",
    "JPEG Format": "JPEG 格式",
    "TIFF Format": "TIFF 格式",
    "GIF Format": "GIF 格式",
    "Scale to Fill": "缩放使充满容器(未必保持长宽比例)",
    "Scale to Fit": "保持长宽比缩放",
    "Image Format": "图像格式",
    Resize: "调整大小",
    "Converted Images": "转换图片",
    Scale: "比例",

    "tool.rqrcode.title": "读取二维码",
    "tool.rqrcode.mintitle": "读取二维码",
    "tool.rqrcode.description": "从图片或摄像头读取二维码",

    "Color Picker": "颜色选择",
    "Color Picker ": "颜色选择工具",
    "Picker the color and copy components": "选择一种颜色并复制格式化的颜色",
    "Selected Color": "所选颜色",
    "Contrast": "对比度",
    "Text Color": "文本颜色",
    "Background Color": "背景颜色",

    "Audio Converter": "音频转换",
    "Audio Converter ": "音频转换工具",
    "Convert audio from one format to another":
        "将音频从一种格式转换为另一种格式",

    "Gif Converter": "Gif 转换",
    "Gif Converter ": "Gif 转换工具",
    "Convert a movie to an animated GIF file": "将视频转换为动画 GIF 文件",

    Settings: "设置",
    "Setting of application": "应用设置",
    "App Theme": "切换主题",
    "Choose your preferred theme to change the look and feel of the interface.": "选择您喜欢的主题来改变界面外观",
    "Dark Mode": "深色模式",
    "Light Mode": "浅色模式",
    "Auto Mode": "跟随系统",
    "Language": "语言",
    "Choose the language you want to use.": "选择您希望使用的语言",
    "Font": "字体",
    "App Font": "应用字体",
    "Choose the font you want to use.": "选择您希望使用的字体",
    "Choose the text editor you want to use.": "选择您希望使用的文本编辑器"
}
