/**
 * Funzione per generare HTML della riga sulla base del valore dei dati
 * @param {string} option.id 
 * @param {string} option.title 
 * @param {string} option.body
 * @param {string} option.author 
 * @returns 
 */
export const generateDataTemplateHTML = (option = {id, title, body, author}) => `
<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="py-4 px-6">
    ${option.id}
    </td>
    <td class="py-4 px-6">
    ${option.author}
    </td>
    <td class="py-4 px-6">
    ${option.title}
    </td>
    <td class="py-4 px-6">
    ${option.body}
    </td>
</tr>
`;