# 🚀 Configuração EmailJS - Lansutech

## 📋 Passo a Passo Completo

### **1. Criar Conta no EmailJS**

1. Acesse [emailjs.com](https://emailjs.com)
2. Clique em "Sign Up" e crie sua conta gratuita
3. Faça login na sua conta

### **2. Configurar Email Service**

1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"** (ou outro provedor)
4. Conecte sua conta de email
5. **Anote o Service ID** (ex: `service_abc123`)

### **3. Criar Template de Email**

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use este template:

```html
<h2>Nova Mensagem do Site Lansutech</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Assunto:</strong> {{subject}}</p>

<h3>Mensagem:</h3>
<p>{{message}}</p>

<hr>
<p><em>Enviado via formulário de contato do site Lansutech</em></p>
```

4. **Anote o Template ID** (ex: `template_tltp5l8`)

### **4. Obter Public Key**

1. Vá em **"Account"** → **"API Keys"**
2. **Anote a Public Key** (ex: `K8KUO_iCUg83k_Pqh`)

### **5. Configurar no Código**

**Arquivo:** `src/lib/api.ts`
**Linha:** ~8-12

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',     // ← Seu Service ID
  TEMPLATE_ID: 'template_xyz789',   // ← Seu Template ID  
  PUBLIC_KEY: 'user_def456',        // ← Sua Public Key
};
```

### **6. Instalar Dependência**

**Abra o PowerShell como Administrador** e execute:

```powershell
# Permitir execução de scripts
Set-ExecutionPolicy

# Navegar para o projeto
cd "C:\Users\sgtpe\OneDrive\Documentos\GitHub\lansutechsite"

# Instalar EmailJS
npm install @emailjs/browser
```

### **7. Testar**

1. Execute `npm run dev`
2. Preencha o formulário
3. Verifique se o email foi enviado
4. Confira o console para logs